interface Trace {
    read(): string;
    at(): number;
}

interface Traces extends Iterable<Trace> {
    add(trace: Trace): Traces;
}

interface Context {
}

interface Contexts extends Iterable<Context> {
    get(key: string): OptionalResult<Context>;
    add(key: string, context: Context): Contexts;
    remove(key: string): Contexts;
}

declare const SuccessSymbol: unique symbol;
declare class Success<T> implements Either<T> {
    private readonly value;
    private readonly traces;
    private readonly contexts;
    [SuccessSymbol]: boolean;
    private constructor();
    static of(value: any, traces?: Traces | null, contexts?: Contexts | null): Success<any>;
    bind(fn: (value: T) => Result<T>): Result<T>;
    lift(value: any): Result<T>;
    map(fn: (value: any) => any): Result<T>;
    unwrap(): T;
    getTraces(): Traces;
    withTrace(trace: Trace): Result<T>;
    withContext(key: string, context: Context): Result<T>;
    getContext(key: string): OptionalResult<Context>;
    getContexts(): Contexts;
    clearContext(key: string): Result<T>;
}
declare function isSuccess<T>(obj: AsyncResult<T> | Result<T>): obj is Success<T>;
declare function allSuccessful<T>(obj: AsyncResult<any> | AsyncResult<any>[]): obj is Success<T> | Success<T>[];

interface Optional<T> {
    bind<U>(fn: (value: T) => Optional<U>): Optional<U>;
    unwrap(): T;
    map<U>(fn: (value: T) => U): Optional<U>;
}

declare const NoneSymbol: unique symbol;
declare class None implements Optional<never> {
    [NoneSymbol]: boolean;
    static of(): None;
    bind(fn: (value: never) => Optional<never>): None;
    unwrap(): never;
    map<U>(fn: (value: never) => U): None;
}
declare function isNone<T>(obj: OptionalResult<T> | AsyncOptionalResult<T>): obj is None;

declare const SomeSymbol: unique symbol;
declare class Some<T> implements Optional<T> {
    private readonly value;
    [SomeSymbol]: boolean;
    private constructor();
    static of<T>(value: T): Some<T>;
    bind<U>(fn: (value: T) => Optional<U>): Optional<U>;
    unwrap(): T;
    map<U>(fn: (value: T) => U): Optional<U>;
}
declare function isSome<T>(obj: OptionalResult<any> | AsyncOptionalResult<any>): obj is Some<T>;

declare const AwaitingSymbol: unique symbol;
interface AwaitingI {
}
declare class Awaiting implements AwaitingI {
    [AwaitingSymbol]: boolean;
}
declare function isAwaiting(obj: AsyncResult<any> | AsyncResult<any>[]): obj is Awaiting | Awaiting[];

type OptionalResult<T> = None | Some<T>;
type AsyncOptionalResult<T> = Result<T> | Awaiting;
type Result<T> = Success<T> | Failure;
type AsyncResult<T> = Result<T> | Awaiting;

interface Either<T> {
    bind(fn: (value: T) => Result<T>): Result<T>;
    unwrap(): T;
    map(fn: (value: T) => T): Result<T>;
    lift(value: T): Result<T>;
    withTrace(trace: Trace): Result<T>;
    getTraces(): Traces;
    withContext(key: string, context: Context): Result<T>;
    getContext(key: string): OptionalResult<Context>;
    getContexts(): Contexts;
    clearContext(key: string): Result<T>;
}

declare const FailureSymbol: unique symbol;
declare class Failure implements Either<never>, Error {
    private readonly traces;
    private readonly contexts;
    message: string;
    code: string;
    name: string;
    previous: Error | null;
    [FailureSymbol]: boolean;
    private constructor();
    static dueTo(message: string, code: string, previous?: Error | null, trace?: Trace | null, traces?: Traces | null, contexts?: Contexts | null): Failure;
    bind(fn: (value: never) => Result<never>): Result<never>;
    map(fn: (value: never) => never): Result<never>;
    lift(value: never): Result<never>;
    unwrap(): never;
    getTraces(): Traces;
    withTrace(trace: Trace): Result<never>;
    withContext(key: string, context: Context): Result<never>;
    getContext(key: string): OptionalResult<Context>;
    getContexts(): Contexts;
    clearContext(key: string): Result<never>;
}
declare function isFailure<T>(obj: AsyncResult<T> | Result<T>): obj is Failure;
declare function hasFailure(obj: AsyncResult<any> | AsyncResult<any>[]): obj is Failure | Failure[];

declare class ContextCollection implements Contexts {
    private contexts;
    static empty(): ContextCollection;
    get(key: string): OptionalResult<Context>;
    add(key: string, context: Context): ContextCollection;
    remove(key: string): ContextCollection;
    [Symbol.iterator](): Iterator<Context>;
}

declare class TraceCommon implements Trace {
    private readonly message;
    private readonly time;
    private constructor();
    static from(message: string, time: number): TraceCommon;
    read(): string;
    at(): number;
}

declare class TraceCollection implements Traces {
    protected traces: Trace[];
    private constructor();
    static empty(): TraceCollection;
    add(trace: Trace): TraceCollection;
    [Symbol.iterator](): Iterator<Trace>;
}

export { type AsyncOptionalResult, type AsyncResult, Awaiting, type Context, ContextCollection, type Contexts, type Either, Failure, None, type Optional, type OptionalResult, type Result, Some, Success, type Trace, TraceCollection, TraceCommon, type Traces, allSuccessful, hasFailure, isAwaiting, isFailure, isNone, isSome, isSuccess };
