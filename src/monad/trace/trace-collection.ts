// Implement the TraceCollection class
import { Traces } from "@/monad/trace/traces";
import { Trace } from "@/monad/trace/trace";

export class TraceCollection implements Traces {
  protected traces: Trace[] = [];

  private constructor() {}

  public static empty(): TraceCollection {
    return new TraceCollection();
  }

  public add(trace: Trace): TraceCollection {
    const newCollection = new TraceCollection();
    newCollection.traces = [...this.traces, trace];
    return newCollection;
  }

  public *[Symbol.iterator](): Iterator<Trace> {
    for (const trace of this.traces) {
      yield trace;
    }
  }
}
