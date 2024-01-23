import { forwardRef, type ComponentPropsWithRef, ForwardedRef } from "react";

type Props = {
  label: string;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, id, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="mb-2">
        <label htmlFor={id} className="mr-2">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className="border-2 border-stone-700 dark:border-stone-100"
          {...rest}
        />
      </div>
    );
  }
);
