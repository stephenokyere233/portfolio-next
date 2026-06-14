"use client";

import WidthConstraint from "@/width-constraint";
import { ChangeEvent, FormEvent, useState } from "react";
import { PiSpinner } from "react-icons/pi";
import { toast } from "sonner";
import { SITE } from "../constants";

interface FormData {
  name: string;
  email: string;
  location: string;
  message: string;
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
    const emailData = {
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
        toast.success("Got it — I'll reply as soon as I can.");
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
      <WidthConstraint className="w-full max-w-lg py-20">
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-wider gradient-text">
          Hire Me
        </h1>
        <p className="text-white/60 text-[15px] mb-10">{SITE.contactIntro}</p>
        <form className="space-y-5" onSubmit={(e) => handleSubmit(e, form)}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Name / Company Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name or company"
              className="input-box"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="input-box"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-1.5">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="City, country"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="What's the project? Timeline, budget, anything helpful."
              className="input-box resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-[200px] flex items-center justify-center disabled:opacity-50"
          >
            {loading ? <PiSpinner className="animate-spin" size={18} /> : "Submit"}
          </button>
        </form>
      </WidthConstraint>
    </div>
  );
}
