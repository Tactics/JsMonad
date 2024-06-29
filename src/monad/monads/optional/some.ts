import { Optional } from "@/monad/optional";

export class Some<T> implements Optional<T> {
  private readonly value: T;

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
