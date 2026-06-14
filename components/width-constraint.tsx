import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export default function WidthConstraint(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full max-w-[1200px] mx-auto px-5", props.className)}>
      {props.children}
    </div>
  );
}
