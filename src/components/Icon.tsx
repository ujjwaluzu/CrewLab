type IconName =
  | "doc"
  | "users"
  | "code"
  | "bars"
  | "bulb"
  | "branch"
  | "check"
  | "chat"
  | "pulse"
  | "grid"
  | "arrow"
  | "left"
  | "up-right"
  | "search"
  | "twitter"
  | "instagram"
  | "discord";

type IconProps = {
  name: IconName;
  className?: string;
  ariaHidden?: boolean;
};

export default function Icon({ name, className = "ic", ariaHidden = true }: IconProps) {
  return (
    <svg className={className} aria-hidden={ariaHidden}>
      <use href={`#i-${name}`} />
    </svg>
  );
}