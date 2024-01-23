import { forwardRef, type ComponentPropsWithRef, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  (
    { label, error, id, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
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
        {error && <p className="text-red-600">{error.message}</p>}
      </div>
    );
  }
);
