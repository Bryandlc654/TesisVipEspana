import { useState, useEffect } from "react";

export function useAnimatedNumber(
  initialValue,
  endValue,
  step,
  interval = 100,
  inView = false
) {
  const [number, setNumber] = useState(initialValue);

  useEffect(() => {
    if (!inView) setNumber(initialValue);
    if (!inView || number >= endValue) return;

    const intervalId = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber >= endValue) {
          clearInterval(intervalId);
          return endValue;
        }
        return prevNumber + step >= endValue ? endValue : prevNumber + step;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [number, endValue, interval, step, inView, initialValue]);

  return number;
}
