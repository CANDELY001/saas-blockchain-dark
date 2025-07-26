import { color } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { TextButton } from "./TextButton";
import { twMerge } from "tailwind-merge";
const colorClasses = {
  fuchsia: {
    bg: "bg-fuchsia-500",
    text: "text-fuchsia-500",
  },
  lime: {
    bg: "bg-lime-500",
    text: "text-lime-500",
  },
  cyan: {
    bg: "bg-cyan-500",
    text: "text-cyan-500",
  },
  violet: {
    bg: "bg-violet-500",
    text: "text-violet-500",
  },
};
export const Card = (
  props: ComponentPropsWithoutRef<"div"> & {
    color: keyof typeof colorClasses;
    buttonText?: string;
  }
) => {
  const { color, children, className, buttonText } = props;
  return (
    <div className={twMerge("relative z-0 p-8 md:p-10 group", className)}>
      {/* Card side slice Shadow */}
      <div
        className={`absolute size-16 rounded-xl ${
          colorClasses[color as keyof typeof colorClasses].bg
        } top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300`}
      ></div>
      {/* Card side slice */}
      <div
        className={`absolute size-16 rounded-xl ${
          colorClasses[color as keyof typeof colorClasses].bg
        } top-1.5 right-1.5 -z-10 transition duration-300`}
      ></div>
      <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
      <div>{children}</div>
      <div className="flex justify-between mt-12">
        <TextButton
          className={colorClasses[color as keyof typeof colorClasses].text}
        >
          {buttonText || "Learn more"}
        </TextButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};
