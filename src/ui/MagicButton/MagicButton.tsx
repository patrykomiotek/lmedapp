import { ForwardedRef, MouseEventHandler, forwardRef } from "react";

type Props = {
  label: string;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave: MouseEventHandler<HTMLButtonElement>;
};

const styles = {
  backgroundColor: "blue",
};

export const MagicButton = forwardRef(
  (
    { label, onMouseEnter, onMouseLeave }: Props,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        style={styles}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {label}
      </button>
    );
  }
);
