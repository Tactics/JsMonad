// Define the None class implementing the Optional interface
import { Optional } from "@/monad/optional";
import { AsyncOptionalResult, OptionalResult } from "@/monad/result";

const NoneSymbol = Symbol("JsMonadNoneSymbol");

export class None implements Optional<never> {
  [NoneSymbol] = true;

  static of(): None {
    return new None();
  }

  bind(fn: (value: never) => Optional<never>): None {
    return this;
  }

  unwrap(): never {
    throw new Error("Value of None cannot be unwrapped");
  }

  map<U>(fn: (value: never) => U): None {
    return this;
  }
}

export function isNone<T>(
  obj: OptionalResult<T> | AsyncOptionalResult<T>,
): obj is None {
  return obj && (obj as None)[NoneSymbol] === true;
}
