import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export const Circle = (
  props: ComponentPropsWithoutRef<"div"> & { animate?: boolean }
) => {
  const { className, children, animate } = props;
  return (
    //  pay attention to classname placement in twmerge*
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full relative",
        className
      )}
    >
      <motion.div
        animate={animate && { rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className={twMerge(
          "absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 border-[6px] border-transparent",
          animate && "border-4 border-t-fuchsia-500/30"
        )}
      ></motion.div>
      {children}
    </div>
  );
};
