import { memo } from "react";
import { classMerge } from "../utils/cn";

type Props = {
  // children: string;
  children: React.ReactNode;
  className?: string;
};

export const Text = memo(({ children, className }: Props) => {
  return (
    <p className={classMerge("dark:text-slate-300", className)}>{children}</p>
  );
});

Text.displayName = "Text";
