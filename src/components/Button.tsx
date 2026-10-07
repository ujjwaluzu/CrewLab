import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Shared = { children: ReactNode; variant?: "primary" | "secondary"; className?: string };
type LinkButtonProps = Shared & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = Shared & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const classes = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`.trim();
  if ("href" in props && props.href) return <Link className={classes} {...rest as AnchorHTMLAttributes<HTMLAnchorElement>} href={props.href}>{children}</Link>;
  return <button className={classes} {...rest as ButtonHTMLAttributes<HTMLButtonElement>}>{children}</button>;
}
