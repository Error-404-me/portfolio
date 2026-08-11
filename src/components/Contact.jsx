// src/components/Contact.jsx
import { useState } from "react";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import google from "../assets/img/google.svg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import { motion } from "motion/react";

const emailAddress = "pasuquinargie29@gmail.com";
const phoneNumber = "+639317852852";

const contactLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/argie.pasuquin.2025",
    icon: facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/implicit_declaration",
    icon: instagram,
  },
  { label: "Email", href: `mailto:${emailAddress}`, icon: google },
  { label: "GitHub", href: "https://github.com/Error-404-me", icon: github },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/argie-pasuquin-06752a356",
    icon: linkedin,
  },
];

const inputClass =
  "w-full rounded-lg border border-line bg-[#0b0c0f] px-3.5 py-3 text-white resize-y focus:outline-2 focus:outline-cyan/45 focus:border-cyan aria-invalid:border-danger";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const socialItem = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!emailPattern.test(form.email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      nextErrors.message = "Please write at least 10 characters.";

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please fix the highlighted fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name.trim()}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
    );

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message prepared.");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      alert("Email address copied.");
    } catch {
      setStatus(`Email: ${emailAddress}`);
    }
  };

  return (
    <motion.section
      className="px-6 py-23 md:px-4 md:py-16"
      id="contact"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="shell">
        <motion.div variants={fadeUp} className="section-heading">
          <p className="eyebrow-label">Contact</p>
          <h2 className="heading-lg">Tell me what you are building.</h2>
          <p className="mt-4 text-muted">
            Use the form to prepare an email, or reach me directly through the
            links below.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="card-surface grid grid-cols-1 overflow-hidden md:grid-cols-[minmax(240px,0.65fr)_minmax(0,1fr)]"
        >
          <motion.aside
            variants={slideLeft}
            className="grid content-center gap-6 bg-surface-2 p-[22px] text-left md:p-7"
            aria-label="Contact details"
          >
            <div>
              <h3 className="m-0 text-[1.55rem] text-white">Email</h3>
              <a
                href={`mailto:${emailAddress}`}
                className="text-accent no-underline break-words"
              >
                {emailAddress}
              </a>
            </div>
            <div>
              <h3 className="m-0 text-[1.55rem] text-white">Phone</h3>
              <a
                href={`tel:${phoneNumber}`}
                className="text-accent no-underline break-words"
              >
                +63 931 785 2852
              </a>
            </div>
            <div>
              <h3 className="m-0 text-[1.55rem] text-white">Location</h3>
              <p className="text-muted">Balidbid, Santa Fe, Cebu</p>
            </div>
            <motion.button
              type="button"
              className="btn-secondary justify-self-start"
              whileHover={{
                y: -3,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="btn-secondary justify-self-start"
              onClick={copyEmail}
            >
              Copy Email
            </motion.button>
          </motion.aside>

          <motion.div variants={slideRight} className="p-[22px] md:p-7">
            <form
              action="https://formsubmit.co/d1d5c1f790f0b5f5d01f1daffc70c5bd "
              noValidate
              method="POST"
              className="grid gap-2.5 text-left"
              onSubmit={handleSubmit}
            >
              <label htmlFor="name" className="font-extrabold text-white">
                Name
              </label>
              <motion.input
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#22d3ee",
                }}
                transition={{
                  duration: 0.2,
                }}
                id="name"
                type="text"
                className={inputClass}
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={updateField}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span className="text-[0.88rem] text-danger" id="name-error">
                  {errors.name}
                </span>
              )}

              <label htmlFor="email" className="font-extrabold text-white">
                Email
              </label>
              <motion.input
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#22d3ee",
                }}
                transition={{
                  duration: 0.2,
                }}
                id="email"
                type="email"
                className={inputClass}
                name="email"
                placeholder="yourEmail@gmail.com"
                value={form.email}
                onChange={updateField}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span className="text-[0.88rem] text-danger" id="email-error">
                  {errors.email}
                </span>
              )}

              <label htmlFor="message" className="font-extrabold text-white">
                Message
              </label>
              <textarea
                id="message"
                rows={7}
                placeholder="Your message here..."
                name="message"
                className={inputClass}
                value={form.message}
                onChange={updateField}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span className="text-[0.88rem] text-danger" id="message-error">
                  {errors.message}
                </span>
              )}

              <motion.button
                type="submit"
                className="btn-primary w-full"
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                Send Message
              </motion.button>

              <p
                className="min-h-[22px] text-[0.88rem] text-support"
                aria-live="polite"
              >
                {status}
              </p>

              <div
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-2.5 text-[0.88rem] text-muted"
                aria-hidden="true"
              >
                <hr className="w-full border-0 border-t border-line" />
                <span>Or via</span>
                <hr className="w-full border-0 border-t border-line" />
              </div>

              <div className="flex items-center justify-center gap-2.5">
                {contactLinks.map((link) => (
                  <motion.a
                    variants={socialItem}
                    key={link.label}
                    whileHover={{
                      y: -6,
                      scale: 1.12,
                      rotate: 5,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="flex h-[42px] w-[42px] items-center justify-center rounded-lg border border-line bg-surface-2 transition duration-150 hover:-translate-y-0.5 hover:border-accent/45"
                    href={link.href}
                    aria-label={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    <img
                      src={link.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-5 invert"
                    />
                  </motion.a>
                ))}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ContactMe;
