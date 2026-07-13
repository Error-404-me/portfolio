import { useState } from "react";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import google from "../assets/img/google.svg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";

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
  {
    label: "Email",
    href: `mailto:${emailAddress}`,
    icon: google,
  },
  {
    label: "GitHub",
    href: "https://github.com/Error-404-me",
    icon: github,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/argie-pasuquin-06752a356",
    icon: linkedin,
  },
];

function ContactMe() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = "Please write at least 10 characters.";
    }

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
    <section className="contact_me" id="contact">
      <div className="a-container">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Tell me what you are building.</h2>
          <p className="info">
            Use the form to prepare an email, or reach me directly through the
            links below.
          </p>
        </div>

        <div className="f-container">
          <aside className="p-form" aria-label="Contact details">
            <div>
              <h3>Email</h3>
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </div>
            <div>
              <h3>Phone</h3>
              <a href={`tel:${phoneNumber}`}>+63 931 785 2852</a>
            </div>
            <div>
              <h3>Location</h3>
              <p>Balidbid, Santa Fe, Cebu</p>
            </div>
            <button type="button" className="copy-button" onClick={copyEmail}>
              Copy Email
            </button>
          </aside>

          <div className="form">
            <form
              action={"https://formsubmit.co/d1d5c1f790f0b5f5d01f1daffc70c5bd "}
              noValidate
              method="POST"
            >
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="email"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={updateField}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span className="form-error" id="name-error">
                  {errors.name}
                </span>
              )}

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="email"
                name="email"
                placeholder="yourEmail@gmail.com"
                value={form.email}
                onChange={updateField}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span className="form-error" id="email-error">
                  {errors.email}
                </span>
              )}

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={7}
                placeholder="Your message here..."
                name="message"
                value={form.message}
                onChange={updateField}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span className="form-error" id="message-error">
                  {errors.message}
                </span>
              )}

              <button type="submit" className="c-submit">
                Send With Email App
              </button>

              <p className="form-status" aria-live="polite">
                {status}
              </p>

              <div className="separator" aria-hidden="true">
                <hr />
                <span>Or via</span>
                <hr />
              </div>

              <div className="s-media">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    className="social"
                    href={link.href}
                    aria-label={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    <img src={link.icon} alt="" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
