import { AsyncResult } from "@/monad/result";
import React, { useState } from "react";
import useEffectAsyncResult from "@/monad/hooks/use-effect-async-result";
import { Failure } from "@/monad/monads/either/failure";
import { Success } from "@/monad/monads/either/success";

type Props<T> = {
  asyncResult: AsyncResult<T>;
  onLoading: React.ReactNode;
  onError: (error: Failure) => React.ReactNode;
  onSuccess: (data: Success<T>) => React.ReactNode;
};

export function AsyncResultSuspense<T>(props: Props<T>) {
  const { asyncResult, onLoading, onError, onSuccess } = props;

  const [data, setData] = useState<Success<T> | null>(null);
  const [error, setError] = useState<Failure | false>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffectAsyncResult<T>(asyncResult, {
    onSuccess: (data) => {
      setData(data);
      setLoading(false);
    },
    onFailure: (error) => {
      setError(error);
      setLoading(false);
    },
  });

  if (loading) {
    return <>{onLoading}</>;
  }

  if (error) {
    return <>{onError(error)}</>;
  }

  if (data) {
    return <>{onSuccess(data)}</>;
  }

  return null;
}
