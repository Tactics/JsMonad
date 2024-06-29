import { Success } from "@/monad/monads/either/success";
import { Failure } from "@/monad/monads/either/failure";
import { None } from "@/monad/monads/optional/none";
import { Some } from "@/monad/monads/optional/some";
import { Awaiting } from "@/monad/awaiting";

export type OptionalResult<T> = None | Some<T>;
export type Result<T> = Success<T> | Failure;
export type AsyncResult<T> = Result<T> | Awaiting;
