import { Button } from "@lmedui/common-ui";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { KeyboardEventHandler, useRef } from "react";
import { Input } from "../../ui/Input";

export const CounterRedux = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const filedRef = useRef<HTMLInputElement>(null);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const value = filedRef.current?.value || 0;
      dispatch(incrementByAmount(Number(value)));
    }
  };

  return (
    <div>
      <Button label="-" onClick={() => dispatch(decrement())} />
      {counterValue}
      <Button label="+" onClick={() => dispatch(increment())} />
      <Input
        label="Enter amount"
        ref={filedRef}
        type="number"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
