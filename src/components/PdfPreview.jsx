// src/components/PdfPreview.jsx
import { useEffect, useState } from "react";

function PdfPreview({
  fileUrl,
  fileName = "resume.pdf",
  triggerLabel = "View Resume",
  open,
  onClose,
}) {
  const isControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isControlled ? open : internalOpen;
  const closeOverlay = isControlled ? onClose : () => setInternalOpen(false);

  useEffect(() => {
    if (isControlled || !isOpen) return undefined;

    document.body.classList.add("resume-open");
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setInternalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("resume-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isControlled, isOpen]);

  return (
    <>
      {!isControlled && (
        <button
          type="button"
          className="btn-secondary"
          onClick={() => setInternalOpen(true)}
        >
          {triggerLabel}
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex flex-col bg-black/88"
          role="dialog"
          aria-modal="true"
          aria-label={`${fileName} preview`}
        >
          <div className="flex flex-col flex-wrap items-start justify-between gap-3 border-b border-line bg-canvas/94 px-4 py-3 sm:flex-row sm:items-center">
            <span className="font-mono text-[0.85rem] tracking-[0.02em] text-muted">
              {fileName}
            </span>

            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                className="btn-secondary"
                onClick={closeOverlay}
              >
                Close
              </button>
            </div>
          </div>

          <div className="flex-1 p-[10px] sm:p-4">
            <iframe
              src={fileUrl}
              title={fileName}
              className="h-full w-full rounded-lg border border-line bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PdfPreview;
