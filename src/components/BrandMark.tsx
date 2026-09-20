type BrandMarkProps = { dark?: boolean };

export default function BrandMark({ dark = false }: BrandMarkProps) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true">
      <polygon points="14,2 25,8 25,20 14,26 3,20 3,8" fill="var(--red)" />
      <polygon points="14,8 20,11.5 20,16.5 14,20 8,16.5 8,11.5" fill={dark ? "#0A0908" : "var(--paper)"} />
    </svg>
  );
}