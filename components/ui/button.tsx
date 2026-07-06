import { clsx } from "clsx";
import type { ReactNode } from "react";

type ButtonVariant = "solid" | "outline";
type ButtonSize = "md" | "sm";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  /** opens in a new tab with rel="noopener noreferrer" */
  external?: boolean;
  /** appends a ↗ glyph */
  arrow?: boolean;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] transition-[transform,background-color,border-color,filter] duration-200 active:translate-y-px active:scale-[0.985]";

const variantClasses: Record<ButtonVariant, string> = {
  solid: "bg-[var(--btn-bg)] font-semibold text-[var(--btn-text)] hover:bg-[var(--btn-hover)]",
  outline: "border border-border-strong font-medium text-text hover:bg-surface-2",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-[11px] text-[13.5px]",
  sm: "px-[15px] py-2 text-[13px]",
};

export function Button({
  variant = "solid",
  size = "md",
  href,
  external,
  arrow,
  icon,
  className,
  children,
  type = "button",
  onClick,
  ...rest
}: ButtonProps) {
  const cls = clsx(base, variantClasses[variant], sizeClasses[size], className);
  const inner = (
    <>
      {icon}
      <span>{children}</span>
      {arrow ? <span aria-hidden="true">↗</span> : null}
    </>
  );

  if (href) {
    const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={cls} {...ext} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {inner}
    </button>
  );
}
