import { Either } from "@/monad/either";
import { AsyncResult, OptionalResult, Result } from "@/monad/result";
import { Traces } from "@/monad/trace/traces";
import { Trace } from "@/monad/trace/trace";
import { Contexts } from "@/monad/context/contexts";
import { Context } from "@/monad/context/context";
import { TraceCollection } from "@/monad/trace/trace-collection";
import { TraceCommon } from "@/monad/trace/trace-common";
import { ContextCollection } from "@/monad/context/context-collection";
import { isSuccess } from "@/monad/monads/either/success";

const FailureSymbol = Symbol("JsMonadFailureSymbol");

export class Failure implements Either<never>, Error {
  private readonly traces: Traces;
  private readonly contexts: Contexts;
  message: string;
  code: string;
  name: string;
  previous: Error | null;

  [FailureSymbol] = true;

  static [Symbol.hasInstance](obj: any): boolean {
    return isFailure(obj);
  }

  private constructor(
    message: string,
    code: string,
    traces: Traces,
    contexts: Contexts,
    previous: Error | null,
  ) {
    this.message = message;
    this.name = "Failure";
    this.code = code;
    this.traces = traces;
    this.contexts = contexts;
    this.previous = previous;
  }

  static dueTo(
    message: string,
    code: string,
    previous?: Error | null,
    trace?: Trace | null,
    traces?: Traces | null,
    contexts?: Contexts | null,
  ): Failure {
    // Add Failure traces as last item.
    traces = traces ?? TraceCollection.empty();
    if (trace) {
      traces.add(trace);
    } else {
      // Fallback to a common trace of the message when no specific trace was provided.
      traces.add(TraceCommon.from(message, Date.now()));
    }

    contexts = contexts ?? ContextCollection.empty();
    return new Failure(
      message,
      code,
      traces,
      contexts,
      previous ? previous : null,
    );
  }

  bind(fn: (value: never) => Result<never>): Result<never> {
    return this;
  }

  map(fn: (value: never) => never): Result<never> {
    return this;
  }

  lift(value: never): Result<never> {
    return this;
  }

  unwrap(): never {
    throw new Error("Value of Failure can not be unwrapped");
  }

  getTraces(): Traces {
    return this.traces;
  }

  withTrace(trace: Trace): Result<never> {
    this.traces.add(trace);
    return this;
  }

  withContext(key: string, context: Context): Result<never> {
    this.contexts.add(key, context);
    return this;
  }

  getContext(key: string): OptionalResult<Context> {
    return this.contexts.get(key);
  }

  getContexts(): Contexts {
    return this.contexts;
  }

  clearContext(key: string): Result<never> {
    this.contexts.remove(key);
    return this;
  }
}

export function isFailure<T>(obj: AsyncResult<T> | Result<T>): obj is Failure {
  return obj && (obj as Failure)[FailureSymbol] === true;
}
