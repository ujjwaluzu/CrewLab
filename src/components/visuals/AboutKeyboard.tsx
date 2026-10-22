"use client";

import { useEffect, useState } from "react";
import BrandMark from "@/components/BrandMark";

const functionKeys = ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"];

const keyRows = [
  ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", ["BACK", 2]],
  [["TAB", 1], "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", ["\\", 2]],
  [["CAPS", 2], "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", ["ENTER", 2]],
  [["SHIFT", 2], "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", ["SHIFT", 3]],
  [["CTRL", 1], ["⌘", 1], ["ALT", 1], ["", 9], ["ALT", 1], ["FN", 1], ["CTRL", 1]],
] as const;
const numpadRows = [
  [["NUM", 1, 1], ["/", 1, 1], ["*", 1, 1], ["-", 1, 1]],
  [["7", 1, 1], ["8", 1, 1], ["9", 1, 1], ["+", 1, 2]],
  [["4", 1, 1], ["5", 1, 1], ["6", 1, 1]],
  [["1", 1, 1], ["2", 1, 1], ["3", 1, 1], ["ENTER", 1, 2]],
  [["0", 2, 1], [".", 1, 1]],
] as const;

function mainKeyCode(label: string, rowIndex: number, keyIndex: number) {
  if (/^[A-Z]$/.test(label)) return `Key${label}`;
  if (/^[0-9]$/.test(label)) return `Digit${label}`;
  const codes: Record<string, string> = {
    "~": "Backquote", "-": "Minus", "=": "Equal", "[": "BracketLeft", "]": "BracketRight", "\\": "Backslash",
    ";": "Semicolon", "'": "Quote", ",": "Comma", ".": "Period", "/": "Slash", BACK: "Backspace",
    TAB: "Tab", CAPS: "CapsLock", ENTER: "Enter", ESC: "Escape", ALT: "AltLeft", "⌘": "MetaLeft",
  };
  if (label === "SHIFT") return rowIndex === 3 && keyIndex === 0 ? "ShiftLeft" : "ShiftRight";
  if (label === "CTRL") return keyIndex === 0 ? "ControlLeft" : "ControlRight";
  if (label === "ALT") return keyIndex === 2 ? "AltLeft" : "AltRight";
  if (rowIndex === 4 && label === "") return "Space";
  return codes[label];
}

function Key({ label, code, span = 1, rowSpan = 1, pressed, brandMark = false }: { label: string; code?: string; span?: number; rowSpan?: number; pressed: boolean; brandMark?: boolean }) {
  return <span className={`cl-about-key${span > 1 ? " is-wide" : ""}${pressed ? " is-pressed" : ""}${brandMark ? " has-brand-mark" : ""}`} data-code={code} style={{ gridColumn: `span ${span}`, gridRow: `span ${rowSpan}` }}>{brandMark ? <BrandMark /> : label}</span>;
}

function RowKey({ spec, rowIndex, keyIndex, pressedCodes }: { spec: string | readonly [string, number]; rowIndex: number; keyIndex: number; pressedCodes: Set<string> }) {
  const [label, span] = typeof spec === "string" ? [spec, 1] : spec;
  const code = mainKeyCode(label, rowIndex, keyIndex);
  return <Key label={label} code={code} span={span} pressed={Boolean(code && pressedCodes.has(code))} brandMark={rowIndex === 4 && label === ""} />;
}

function numpadCode(label: string) {
  const specialCodes: Record<string, string> = {
    NUM: "NumLock", ENTER: "NumpadEnter", "+": "NumpadAdd", "-": "NumpadSubtract",
    "/": "NumpadDivide", "*": "NumpadMultiply", ".": "NumpadDecimal",
  };
  return specialCodes[label] ?? (/^[0-9]$/.test(label) ? `Numpad${label}` : undefined);
}

export default function AboutKeyboard() {
  const [pressedCodes, setPressedCodes] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const isTypingTarget = (target: EventTarget | null) => target instanceof HTMLElement && (
      target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
    );
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target) || event.repeat) return;
      setPressedCodes((current) => new Set(current).add(event.code));
    };
    const onKeyUp = (event: KeyboardEvent) => {
      setPressedCodes((current) => {
        if (!current.has(event.code)) return current;
        const next = new Set(current);
        next.delete(event.code);
        return next;
      });
    };
    const clearPressed = () => setPressedCodes(new Set());

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", clearPressed);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", clearPressed);
    };
  }, []);

  return (
    <div className="cl-about-keyboard-shell">
      <div className="cl-about-keyboard-stage" aria-hidden="true">
        <div className="cl-about-keyboard">
          <div className="cl-about-keyboard-left">
            <div className="cl-about-function-row">
              <Key label="ESC" code="Escape" pressed={pressedCodes.has("Escape")} />
              <div className="cl-about-function-keys">{functionKeys.map((key) => <Key label={key} code={key} pressed={pressedCodes.has(key)} key={key} />)}</div>
            </div>
            <div className="cl-about-key-grid">
              {keyRows.map((row, index) => <div className="cl-about-key-row" key={index}>{row.map((spec, keyIndex) => <RowKey key={`${index}-${keyIndex}`} spec={spec} rowIndex={index} keyIndex={keyIndex} pressedCodes={pressedCodes} />)}</div>)}
            </div>
          </div>
          <div className="cl-about-keyboard-right">
            <div className="cl-about-nav-grid">{[["INS", "Insert"], ["HOME", "Home"], ["PG↑", "PageUp"], ["DEL", "Delete"], ["END", "End"], ["PG↓", "PageDown"]].map(([key, code]) => <Key label={key} code={code} pressed={pressedCodes.has(code)} key={code} />)}</div>
            <div className="cl-about-arrows">
              <Key label="↑" code="ArrowUp" pressed={pressedCodes.has("ArrowUp")} />
              <div><Key label="←" code="ArrowLeft" pressed={pressedCodes.has("ArrowLeft")} /><Key label="↓" code="ArrowDown" pressed={pressedCodes.has("ArrowDown")} /><Key label="→" code="ArrowRight" pressed={pressedCodes.has("ArrowRight")} /></div>
            </div>
          </div>
          <div className="cl-about-numpad">
            {numpadRows.flatMap((row, rowIndex) => row.map(([label, columnSpan, rowSpan], keyIndex) => (
              <Key label={label} code={numpadCode(label)} span={columnSpan} rowSpan={rowSpan} pressed={Boolean(numpadCode(label) && pressedCodes.has(numpadCode(label)!))} key={`${rowIndex}-${keyIndex}`} />
            )))}
          </div>
        </div>
      </div>
    </div>
  );
}

