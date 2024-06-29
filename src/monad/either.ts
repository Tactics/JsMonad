import { Trace } from "@/monad/trace/trace";
import { Traces } from "@/monad/trace/traces";
import { Context } from "@/monad/context/context";
import { OptionalResult, Result } from "@/monad/result";
import { Contexts } from "@/monad/context/contexts";

export interface Either<T> {
  bind(fn: (value: T) => Result<T>): Result<T>;
  unwrap(): T;
  map(fn: (value: T) => T): Result<T>;

  // Carrier:
  // Replicate itself with only a value change.
  // This is used to keep contexts and traces over transformations and should be used for every value transformation.
  lift(value: T): Result<T>;

  // Writer:
  // Set and Read traces over transformations.
  // This is used for error handling and chain tracking, optionally including a trace in any step of the chain.
  withTrace(trace: Trace): Result<T>;
  getTraces(): Traces;

  // Reader:
  // Set, Read and Clear Context over transformations.
  // This is used to pass along a context needed throughout the chain.
  withContext(key: string, context: Context): Result<T>;
  getContext(key: string): OptionalResult<Context>;
  getContexts(): Contexts;
  clearContext(key: string): Result<T>;
}
