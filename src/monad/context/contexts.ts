import { Context } from "@/monad/context/context";
import { OptionalResult } from "@/monad/result";

export interface Contexts extends Iterable<Context> {
  get(key: string): OptionalResult<Context>;
  add(key: string, context: Context): Contexts;
  remove(key: string): Contexts;
}
