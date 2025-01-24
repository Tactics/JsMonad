import { Optional } from "@/monad/optional";
import { AsyncOptionalResult, OptionalResult } from "@/monad/result";
import { isNone, None } from "@/monad/monads/optional/none";

const SomeSymbol = Symbol("JsMonadSomeSymbol");

export class Some<T> implements Optional<T> {
  private readonly value: T;

  [SomeSymbol] = true;

  static [Symbol.hasInstance](obj: any): boolean {
    return isSome(obj);
  }

  private constructor(value: T) {
    this.value = value;
  }

  static of<T>(value: T): Some<T> {
    return new Some(value);
  }

  bind<U>(fn: (value: T) => Optional<U>): Optional<U> {
    return fn(this.value);
  }

  unwrap(): T {
    return this.value;
  }

  map<U>(fn: (value: T) => U): Optional<U> {
    const newValue = fn(this.value);
    return Some.of(newValue);
  }
}

export function isSome<T>(
  obj: OptionalResult<any> | AsyncOptionalResult<any>,
): obj is Some<T> {
  return obj && (obj as Some<T>)[SomeSymbol] === true;
}
