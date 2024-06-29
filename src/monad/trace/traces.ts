// Define the Traces interface
import { Trace } from "@/monad/trace/trace";

export interface Traces extends Iterable<Trace> {
  add(trace: Trace): Traces;
}
