import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export default function WidthConstraint(props: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={cn("max-w-[1300px] mx-auto px-5", props.className)}>
      {props.children}
    </div>
  );
}
