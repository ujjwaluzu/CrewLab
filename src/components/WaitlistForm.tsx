"use client";

import { FormEvent, useState } from "react";
import Icon from "@/components/Icon";

type WaitlistFormProps = { footer?: boolean; locale?: "en" | "hi" };
type SubmissionState = "idle" | "loading" | "success" | "duplicate" | "invalid" | "error";

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function messageFor(state: SubmissionState, footer: boolean, locale: "en" | "hi") {
  if (locale === "hi") {
    switch (state) {
      case "loading": return "शामिल किया जा रहा है...";
      case "success": return footer ? "आप सूची में हैं" : "आप सूची में हैं। CrewLab तैयार होने पर हम आपको बताएँगे।";
      case "duplicate": return "आप पहले से सूची में हैं।";
      case "invalid": return footer ? "सही ईमेल लिखें" : "सही ईमेल पता लिखें, जैसे naam@example.com.";
      case "error": return "कुछ गड़बड़ हुई। कृपया फिर कोशिश करें।";
      default: return "";
    }
  }
  switch (state) {
    case "loading": return "Joining...";
    case "success": return footer ? "You're on the list" : "You're on the list. We'll let you know when CrewLab is ready.";
    case "duplicate": return "You're already on the list.";
    case "invalid": return footer ? "Enter a valid email" : "Enter a valid email address, like name@example.com.";
    case "error": return "Something went wrong. Please try again.";
    default: return "";
  }
}

export default function WaitlistForm({ footer = false, locale = "en" }: WaitlistFormProps) {
  const [value, setValue] = useState("");
  const [state, setState] = useState<SubmissionState>("idle");
  const message = messageFor(state, footer, locale);
  const isLoading = state === "loading";
  const isInvalid = state === "invalid" || state === "error";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLoading) return;

    const normalizedEmail = value.trim().toLowerCase();
    if (!validEmail(normalizedEmail)) {
      setState("invalid");
      return;
    }

    setState("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail }),
      });
      const result = (await response.json().catch(() => null)) as { status?: string } | null;

      if (response.ok && result?.status === "duplicate") {
        setValue("");
        setState("duplicate");
      } else if (response.ok) {
        setValue("");
        setState("success");
      } else if (response.status === 400) {
        setState("invalid");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (footer) {
    return (
      <>
        <form className="foot-form" onSubmit={submit} noValidate>
          <label className="visually-hidden" htmlFor="email2">{locale === "hi" ? "ईमेल पता" : "Email address"}</label>
          <input id="email2" name="email" type="email" placeholder={message || (locale === "hi" ? "अपना ईमेल लिखें" : "Enter your email")} autoComplete="email" value={value} aria-invalid={isInvalid} aria-describedby="waitlist-footer-status" onChange={(event) => { setValue(event.target.value); setState("idle"); }} />
          <button type="submit" aria-label={isLoading ? (locale === "hi" ? "सूची में जोड़ रहे हैं" : "Joining the waitlist") : (locale === "hi" ? "जुड़ें" : "Subscribe")} aria-busy={isLoading} disabled={isLoading}><Icon name="arrow" /></button>
        </form>
        <span id="waitlist-footer-status" className="visually-hidden" role="status" aria-live="polite">{message}</span>
      </>
    );
  }

  return (
    <>
      <form className="signup" onSubmit={submit} noValidate>
        <label className="visually-hidden" htmlFor="email">{locale === "hi" ? "अपना ईमेल लिखें" : "Enter your email"}</label>
        <input id="email" name="email" type="email" placeholder={locale === "hi" ? "aap@email.com" : "you@email.com"} autoComplete="email" required value={value} aria-invalid={isInvalid} aria-describedby="waitlist-status" onChange={(event) => { setValue(event.target.value); setState("idle"); }} />
        <button className="btn btn-light" type="submit" disabled={isLoading} aria-busy={isLoading}>{isLoading ? (locale === "hi" ? "शामिल किया जा रहा है..." : "Joining...") : (locale === "hi" ? "प्रतीक्षा सूची में जुड़ें" : "Join the waitlist")} <Icon name="arrow" /></button>
      </form>
      <p id="waitlist-status" className={"fine" + (state === "success" ? " ok" : "")} role="status" aria-live="polite">{message || (locale === "hi" ? "केवल ज़रूरी अपडेट भेजेंगे।" : "No spam. Just updates that matter.")}</p>
    </>
  );
}
