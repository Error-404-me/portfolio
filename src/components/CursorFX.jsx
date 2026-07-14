import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// Anything the reticle should "lock onto" when hovered.
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], .skill-item, .project-card, .mp-card';

// Caps so the bracket never balloons to the size of a huge card.
const MAX_LOCK_WIDTH = 220;
const MAX_LOCK_HEIGHT = 160;
const REST_SIZE = 32;

function lerp(start, end, t) {
  return start + (end - start) * t;
}

function CursorFX() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const stateRef = useRef({
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
    ringX: window.innerWidth / 2,
    ringY: window.innerHeight / 2,
    ringW: REST_SIZE,
    ringH: REST_SIZE,
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
    targetW: REST_SIZE,
    targetH: REST_SIZE,
    locked: false,
  });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) {
      // Touch / coarse pointers keep the native cursor entirely, and
      // isActive stays false so the dot/ring never render at all — see
      // the render guard below for why that matters.
      return undefined;
    }

    setIsActive(true);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const ease = reduceMotion ? 1 : 0.18;

    document.body.classList.add("cursor-fx-active");

    const state = stateRef.current;

    const placeDot = (x, y) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };

    const handleMove = (event) => {
      state.mouseX = event.clientX;
      state.mouseY = event.clientY;
      placeDot(event.clientX, event.clientY);
      if (!state.locked) {
        state.targetX = event.clientX;
        state.targetY = event.clientY;
      }
    };

    const handleOver = (event) => {
      const el = event.target.closest(INTERACTIVE_SELECTOR);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      state.locked = true;
      state.targetX = rect.left + rect.width / 2;
      state.targetY = rect.top + rect.height / 2;
      state.targetW = Math.min(rect.width + 16, MAX_LOCK_WIDTH);
      state.targetH = Math.min(rect.height + 16, MAX_LOCK_HEIGHT);
      ringRef.current?.classList.add("is-locked");
    };

    const handleOut = (event) => {
      const el = event.target.closest(INTERACTIVE_SELECTOR);
      if (!el || el.contains(event.relatedTarget)) return;
      state.locked = false;
      state.targetX = state.mouseX;
      state.targetY = state.mouseY;
      state.targetW = REST_SIZE;
      state.targetH = REST_SIZE;
      ringRef.current?.classList.remove("is-locked");
    };

    const handleDown = () => ringRef.current?.classList.add("is-pressed");
    const handleUp = () => ringRef.current?.classList.remove("is-pressed");

    const handleWindowLeave = () => {
      dotRef.current?.style.setProperty("opacity", "0");
      ringRef.current?.style.setProperty("opacity", "0");
    };
    const handleWindowEnter = () => {
      dotRef.current?.style.setProperty("opacity", "1");
      ringRef.current?.style.setProperty("opacity", "1");
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleWindowLeave);
    document.documentElement.addEventListener("mouseenter", handleWindowEnter);

    let frame;
    const tick = () => {
      state.ringX = lerp(state.ringX, state.targetX, ease);
      state.ringY = lerp(state.ringY, state.targetY, ease);
      state.ringW = lerp(state.ringW, state.targetW, ease);
      state.ringH = lerp(state.ringH, state.targetH, ease);

      if (ringRef.current) {
        ringRef.current.style.width = `${state.ringW}px`;
        ringRef.current.style.height = `${state.ringH}px`;
        ringRef.current.style.transform = `translate(${state.ringX}px, ${state.ringY}px) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleWindowLeave,
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleWindowEnter,
      );
      document.body.classList.remove("cursor-fx-active");
    };
  }, []);

  // Route changes swap out the page's DOM without ever firing a mouseout
  // on whatever triggered the navigation (e.g. the "View Details" button
  // you just clicked) — browsers only fire mouseout from actual pointer
  // movement, never from an element being removed out from under it. So
  // a lock can get stranded pointing at a rect that no longer exists,
  // and stay stuck until the next real hover happens to overwrite it.
  // Force-clear it on navigation instead of waiting for that.
  useEffect(() => {
    const state = stateRef.current;
    state.locked = false;
    state.targetX = state.mouseX;
    state.targetY = state.mouseY;
    state.targetW = REST_SIZE;
    state.targetH = REST_SIZE;
    ringRef.current?.classList.remove("is-locked");
  }, [location.pathname]);

  // Without this, the dot/ring would still render (just un-positioned by
  // JS, since the effect above returns early on touch) and sit visibly
  // stuck at their default CSS position — top-left corner of the screen.
  if (!isActive) {
    return null;
  }

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true">
        <span className="cursor-tick tick-tl" />
        <span className="cursor-tick tick-tr" />
        <span className="cursor-tick tick-bl" />
        <span className="cursor-tick tick-br" />
      </div>
    </>
  );
}

export default CursorFX;
