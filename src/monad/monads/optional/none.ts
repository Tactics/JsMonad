// Define the None class implementing the Optional interface
import { Optional } from "@/monad/optional";

export class None implements Optional<never> {
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
