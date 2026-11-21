import { useState } from "react";
import Mail from "lucide-react/icons/mail";
import MapPin from "lucide-react/icons/map-pin";
import Phone from "lucide-react/icons/phone";
import { motion, useReducedMotion } from "motion/react";
import { emailAddress, socialLinks } from "../data/socialLinks";

const phoneNumber = "+639317852852";

const inputClass =
  "w-full rounded-lg border border-line bg-canvas px-3.5 py-3 text-white placeholder:text-muted/70 focus:border-accent focus:outline-2 focus:outline-accent/30 aria-invalid:border-danger";

const contactMethods = [
  {
    label: "Email",
    value: emailAddress,
    href: `mailto:${emailAddress}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+63 931 785 2852",
    href: `tel:${phoneNumber}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: "Balidbid, Santa Fe, Cebu",
    icon: MapPin,
  },
];

function createRevealVariants(prefersReducedMotion, delay = 0) {
  return {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      },
    },
  };
}

function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const prefersReducedMotion = useReducedMotion();

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
      setStatus("Email address copied.");
    } catch {
      setStatus(`Email: ${emailAddress}`);
    }
  };

  return (
    <section
      className="px-6 py-23 md:px-4 md:py-16"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="shell">
        <motion.header
          variants={createRevealVariants(prefersReducedMotion)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-9 border-b border-line pb-7"
        >
          <p className="eyebrow-label">Contact</p>
          <h1
            id="contact-title"
            className="max-w-3xl text-4xl leading-tight font-bold text-white"
          >
            Have a project in mind?
            <span className="block text-accent">Let’s talk.</span>
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Send a note about what you’re working on, or reach out through one
            of the contact options below.
          </p>
        </motion.header>

        <div className="grid items-start gap-5 lg:grid-cols-[minmax(260px,0.78fr)_minmax(0,1.22fr)]">
          <motion.aside
            variants={createRevealVariants(prefersReducedMotion)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            aria-labelledby="direct-contact-title"
            className="rounded-2xl border border-line bg-surface/65 p-4 sm:p-5"
          >
            <p className="eyebrow-label">Get in touch</p>
            <h2
              id="direct-contact-title"
              className="text-xl font-bold text-white"
            >
              Direct contact
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Prefer to reach out directly? Choose whichever works for you.
            </p>

            <div className="mt-5 space-y-2.5">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-canvas text-accent">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[0.68rem] tracking-[0.08em] text-muted uppercase">
                        {method.label}
                      </span>
                      <span className="mt-1 block break-words text-sm text-text">
                        {method.value}
                      </span>
                    </span>
                  </>
                );

                return method.href ? (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex min-w-0 items-center gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-line hover:bg-surface-2"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={method.label}
                    className="flex min-w-0 items-center gap-3 rounded-xl p-2"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 border-t border-line pt-4">
              <p className="font-mono text-[0.68rem] tracking-[0.08em] text-muted uppercase">
                Find me elsewhere
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    title={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-canvas transition-colors hover:border-accent/60"
                  >
                    <img
                      src={link.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-[18px] w-[18px] invert"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="btn-secondary mt-4 w-full"
              onClick={copyEmail}
            >
              Copy email address
            </button>
          </motion.aside>

          <motion.div
            variants={createRevealVariants(prefersReducedMotion, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="rounded-2xl border border-line bg-surface/65 p-4 sm:p-6"
          >
            <div className="mb-5">
              <h2 className="text-xl font-bold text-white">
                Send me a message
              </h2>
              <p className="mt-1 text-sm text-muted">
                Submitting opens your email app with the message ready to send.
              </p>
            </div>

            <form
              noValidate
              className="grid gap-4 text-left"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid content-start gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-text">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    className={inputClass}
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <span className="text-sm text-danger" id="name-error">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="grid content-start gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-text"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span className="text-sm text-danger" id="email-error">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-text"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="What would you like to talk about?"
                  name="message"
                  className={`${inputClass} resize-y`}
                  value={form.message}
                  onChange={updateField}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <span className="text-sm text-danger" id="message-error">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn-primary w-full">
                Prepare email
                <i className="bi bi-arrow-up-right ml-2" aria-hidden="true" />
              </button>

              <p
                className="min-h-5 text-sm text-support"
                aria-live="polite"
                role="status"
              >
                {status}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
