import { Either } from "@/monad/either";
import { OptionalResult, Result } from "@/monad/result";
import { Contexts } from "@/monad/context/contexts";
import { Traces } from "@/monad/trace/traces";
import { Trace } from "@/monad/trace/trace";
import { Context } from "@/monad/context/context";
import { TraceCollection } from "@/monad/trace/trace-collection";
import { ContextCollection } from "@/monad/context/context-collection";

export class Success<T> implements Either<T> {
  private readonly value: T;
  private readonly traces: Traces;
  private readonly contexts: Contexts;

  private constructor(value: T, traces: Traces, contexts: Contexts) {
    this.value = value;
    this.traces = traces;
    this.contexts = contexts;
  }

  static of(value: any, traces?: Traces | null, contexts?: Contexts | null) {
    return new Success(
      value,
      traces ?? TraceCollection.empty(),
      contexts ?? ContextCollection.empty(),
    );
  }

  bind(fn: (value: T) => Result<T>): Result<T> {
    return fn(this.value);
  }

  lift(value: any): Result<T> {
    return new Success(value, this.traces, this.contexts);
  }

  map(fn: (value: any) => any): Result<T> {
    return new Success(fn(this.value), this.traces, this.contexts);
  }

  unwrap(): T {
    return this.value;
  }

  getTraces(): Traces {
    return this.traces;
  }

  withTrace(trace: Trace): Result<T> {
    this.traces.add(trace);
    return this;
  }

  withContext(key: string, context: Context): Result<T> {
    this.contexts.add(key, context);
    return this;
  }

  getContext(key: string): OptionalResult<Context> {
    return this.contexts.get(key);
  }

  getContexts(): Contexts {
    return this.contexts;
  }

  clearContext(key: string): Result<T> {
    this.contexts.remove(key);
    return this;
  }
}
