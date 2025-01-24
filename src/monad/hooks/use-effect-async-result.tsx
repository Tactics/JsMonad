import { useEffect, useRef } from "react";
import { AsyncResult } from "@/monad/result";
import { Awaiting } from "@/monad/awaiting";
import { Success } from "@/monad/monads/either/success";
import { Failure } from "@/monad/monads/either/failure";
import isEqual from "fast-deep-equal";

type Callbacks<T> = {
  onSuccess?: (value: Success<T>) => void;
  onFailure?: (error: Failure) => void;
};

export function useEffectAsyncResult<T>(
  result: AsyncResult<T>,
  { onSuccess, onFailure }: Callbacks<T>,
): void {
  const previousRef = useRef<AsyncResult<T>>(new Awaiting());

  useEffect(() => {
    const previous = previousRef.current;

    const hasStatusChanged = (() => {
      if (
        previous instanceof Awaiting &&
        (result instanceof Success || result instanceof Failure)
      ) {
        return true;
      }
      if (previous instanceof Success && result instanceof Failure) {
        return true;
      }
      if (previous instanceof Failure && result instanceof Success) {
        return true;
      }
      return false;
    })();

    const hasValueChanged =
      result instanceof Success &&
      previous instanceof Success &&
      !isEqual(previous.unwrap(), result.unwrap());

    if (hasStatusChanged || hasValueChanged) {
      if (result instanceof Success && onSuccess) {
        onSuccess(result);
      }
      if (result instanceof Failure && onFailure) {
        onFailure(result);
      }
    }

    previousRef.current = result;
  }, [result, onSuccess, onFailure]);
}

export default useEffectAsyncResult;
