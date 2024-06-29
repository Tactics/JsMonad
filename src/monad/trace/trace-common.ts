// Implement the TraceCommon class
import { Trace } from "@/monad/trace/trace";

export class TraceCommon implements Trace {
  private readonly message: string;
  private readonly time: number;

  private constructor(message: string, time: number) {
    this.message = message;
    this.time = time;
  }

  public static from(message: string, time: number): TraceCommon {
    return new TraceCommon(message, time);
  }

  public read(): string {
    return this.message;
  }

  public at(): number {
    return this.time;
  }
}
