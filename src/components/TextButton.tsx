import React, { type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const TextButton = (props: ComponentPropsWithoutRef<"button">) => {
  const { className, children, ...rest } = props;
  return (
    <button
      className={twMerge(
        "text-sm font-heading uppercase font-extrabold tracking-wider",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
