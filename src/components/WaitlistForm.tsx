"use client";

import { FormEvent, useState } from "react";
import Icon from "@/components/Icon";

type WaitlistFormProps = { footer?: boolean };

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function WaitlistForm({ footer = false }: WaitlistFormProps) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!validEmail(trimmed)) {
      setSuccess(false);
      if (footer) {
        setValue("");
        setMessage("Enter a valid email");
      } else {
        setMessage("Enter a valid email address, like name@example.com.");
      }
      return;
    }

    setValue("");
    setSuccess(true);
    setMessage(footer ? "You are on the list" : "You are on the list. We will email you when CrewLab opens.");
  }

  if (footer) {
    return (
      <>
        <form className="foot-form" onSubmit={submit} noValidate>
          <label className="visually-hidden" htmlFor="email2">Email address</label>
          <input id="email2" type="email" placeholder={message || "Enter your email"} autoComplete="email" value={value} onChange={(event) => { setValue(event.target.value); setMessage(""); }} />
          <button type="submit" aria-label="Subscribe"><Icon name="arrow" /></button>
        </form>
        <span className="visually-hidden" role="status" aria-live="polite">{message}</span>
      </>
    );
  }

  return (
    <>
      <form className="signup" onSubmit={submit} noValidate>
        <label className="visually-hidden" htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="Enter your email" autoComplete="email" required value={value} onChange={(event) => { setValue(event.target.value); setMessage(""); setSuccess(false); }} />
        <button className="btn btn-light" type="submit">Join the waitlist <Icon name="arrow" /></button>
      </form>
      <p className={`fine${success ? " ok" : ""}`} role="status" aria-live="polite">{message || "No spam. Just updates that matter."}</p>
    </>
  );
}