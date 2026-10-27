import type { CSSProperties } from "react";

const columns = Array.from({ length: 12 }, (_, index) => index);
const levels = Array.from({ length: 6 }, (_, index) => index);
const faces = Array.from({ length: 6 }, (_, index) => index);

export function CrewGridAnimation({ className, locale = "en" }: { className?: string; locale?: "en" | "hi" }) {
  return (
    <div className={`cl-cube-art${className ? ` ${className}` : ""}`} aria-hidden="true">
      <div className="cl-cube-scene">
        <div className="cl-cube-orbit">
          {columns.map((column) => (
            <div
              className="cl-cube-column"
              key={column}
              style={{
                "--column-angle": `${column * 30}deg`,
                "--column-delay": `${column * -0.6}s`,
              } as CSSProperties}
            >
              {levels.map((level) => (
                <div
                  className="cl-cube-box"
                  key={level}
                  style={{
                    "--cube-y": `${level - 2.5}em`,
                  } as CSSProperties}
                >
                  {faces.map((face) => <i key={face} />)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <span className="cl-cube-caption">{locale === "hi" ? "साथ बनाती टीम" : "A crew in motion"} <i /></span>
    </div>
  );
}
