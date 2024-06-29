export interface Optional<T> {
  bind<U>(fn: (value: T) => Optional<U>): Optional<U>;
  unwrap(): T;
  map<U>(fn: (value: T) => U): Optional<U>;
}
