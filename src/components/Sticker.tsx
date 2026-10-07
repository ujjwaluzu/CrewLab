import type { ReactNode } from "react";

export default function Sticker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`sticker ${className}`}>{children}</span>;
}
