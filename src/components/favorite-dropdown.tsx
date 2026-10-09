"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export default function FavoriteDropdown<T extends string>({
  label,
  value,
  options,
  onChange,
  leadingIcon,
}: Readonly<{
  label: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
  leadingIcon?: ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const moveFocus = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const optionsInMenu = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>("[role='menuitemradio']"),
    );
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      optionsInMenu[event.key === "Home" ? 0 : optionsInMenu.length - 1]?.focus();
      return;
    }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const currentIndex = optionsInMenu.indexOf(document.activeElement as HTMLButtonElement);
    const step = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = currentIndex < 0
      ? (step > 0 ? 0 : optionsInMenu.length - 1)
      : (currentIndex + step + optionsInMenu.length) % optionsInMenu.length;
    optionsInMenu[nextIndex]?.focus();
  };

  return (
    <div className="ref-dropdown" ref={rootRef}>
      <button
        ref={triggerRef}
        className="ref-select-trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${label}: ${value}`}
        onClick={() => setOpen((current) => !current)}
      >
        {leadingIcon}
        <span>{value}</span>
        <ChevronDown className={open ? "ref-chevron is-open" : "ref-chevron"} size={14} aria-hidden="true" />
      </button>
      {open && (
        <div className="ref-dropdown-menu" role="menu" aria-label={label} onKeyDown={moveFocus}>
          {options.map((option) => (
            <button
              key={option}
              className={option === value ? "ref-dropdown-option is-selected" : "ref-dropdown-option"}
              type="button"
              role="menuitemradio"
              aria-checked={option === value}
              onClick={() => {
                onChange(option);
                setOpen(false);
                triggerRef.current?.focus();
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
