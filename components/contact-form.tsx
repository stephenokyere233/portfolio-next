"use client";

import Title from "@/title";
import WidthConstraint from "@/width-constraint";
import { ChangeEvent, FormEvent, type ReactNode, useState } from "react";
import { PiSpinner } from "react-icons/pi";
import { toast } from "sonner";
import { SITE } from "../constants";
import { isBlockedEmail } from "../lib/email-validation";

interface FormData {
  name: string;
  email: string;
  location: string;
  message: string;
}

function RequiredMark() {
  return (
    <span className="text-[#8e54e9] ml-0.5" aria-hidden="true">
      *
    </span>
  );
}

function FieldLabel({
  htmlFor,
  children,
  required = false,
  optional = false,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-baseline justify-between gap-3 text-sm font-medium mb-2 text-white/90"
    >
      <span>
        {children}
        {required && <RequiredMark />}
      </span>
      {optional && (
        <span className="text-xs font-normal text-white/35 shrink-0">Optional</span>
      )}
    </label>
  );
}

export default function ContactForm() {
  const [form, setFormData] = useState<FormData>({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent, values: FormData) => {
    e.preventDefault();

    if (isBlockedEmail(values.email)) {
      toast.error("Please use a valid email address.");
      return;
    }

    const emailData = {
      email: values.email,
      subject: `${values.name} reached out!`,
      message: `Hello,\n\nA new contact from your portfolio.\n\nName: ${values.name}\nEmail: ${values.email}\nLocation: ${values.location}\nMessage: ${values.message}`,
    };
    setLoading(true);
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        toast.success("Got it. I'll reply as soon as I can.");
        setFormData({ name: "", email: "", location: "", message: "" });
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Request failed");
      }
    } catch (err) {
      console.error("Error", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100dvh-64px)] flex items-center pt-16">
      <WidthConstraint className="w-full max-w-xl py-16 sm:py-20">
        <header className="mb-10 sm:mb-12">
          <Title label="Get in touch" />
          <p className="text-white/60 text-[15px] leading-relaxed max-w-lg mt-4">
            {SITE.contactIntro}
          </p>
        </header>

        <form
          className="space-y-6"
          onSubmit={(e) => handleSubmit(e, form)}
          aria-describedby="contact-form-legend"
        >
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-x-5">
            <div>
              <FieldLabel htmlFor="name" required>
                Name / company
              </FieldLabel>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name or company"
                className="input-box"
                required
                aria-required="true"
                autoComplete="name"
              />
            </div>
            <div>
              <FieldLabel htmlFor="email" required>
                Email
              </FieldLabel>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input-box"
                required
                aria-required="true"
                autoComplete="email"
              />
            </div>
          </div>

          <div>
            <FieldLabel htmlFor="location" optional>
              Location
            </FieldLabel>
            <input
              type="text"
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="City, country"
              className="input-box"
              autoComplete="address-level2"
            />
          </div>

          <div>
            <FieldLabel htmlFor="message" required>
              Message
            </FieldLabel>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What's the project? Timeline, budget, anything helpful."
              className="input-box resize-none min-h-[140px]"
              required
              aria-required="true"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full sm:w-auto sm:min-w-[180px] flex items-center justify-center disabled:opacity-50"
            >
              {loading ? (
                <PiSpinner className="animate-spin" size={18} />
              ) : (
                "Send message"
              )}
            </button>
          </div>
        </form>
      </WidthConstraint>
    </div>
  );
}
