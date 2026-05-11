"use client";

import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { Turnstile } from "@marsidev/react-turnstile";

const FORMSPARK_FORM_ID = "yzg8TXXfh";

export default function Contact() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) return;
    await submit({ name, email, message, "cf-turnstile-response": turnstileToken });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    setTurnstileToken("");
  };

  return (
    <section id="contact" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Have a question about our products? We'd love to hear from you.
          </p>
        </div>

        {submitted ? (
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-12 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Message Sent!
            </h3>
            <p className="text-zinc-400 text-sm">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-zinc-400 hover:text-white text-sm transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-zinc-900 border border-white/10 rounded-2xl p-8 flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              <label className="text-zinc-400 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-zinc-400 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-zinc-400 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="How can we help you?"
                rows={5}
                className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            {/* Invisible Turnstile — runs silently in background */}
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={(token) => setTurnstileToken(token)}
            />

            <button
              type="submit"
              disabled={submitting || !turnstileToken}
              className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-zinc-200 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>

          </form>
        )}

      </div>
    </section>
  );
}