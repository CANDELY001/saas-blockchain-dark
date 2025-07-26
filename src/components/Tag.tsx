import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const colorClasses = {
  fuchsia: {
    bg: "bg-fuchsia-500/15",
    text: "text-fuchsia-500",
  },
  lime: {
    bg: "bg-lime-500/15",
    text: "text-lime-500",
  },
  cyan: {
    bg: "bg-cyan-500/15",
    text: "text-cyan-500",
  },
  violet: {
    bg: "bg-violet-500/15",
    text: "text-violet-500",
  },
};

export const Tag = (
  props: ComponentPropsWithoutRef<"div"> & {
    color?: keyof typeof colorClasses;
  }
) => {
  const { className, children, color } = props;
  return (
    <div
      className={twMerge(
        "px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs inline-flex rounded-full",
        color && colorClasses[color].bg,
        color && colorClasses[color].text,
        className
      )}
    >
      {children}
    </div>
  );
};
