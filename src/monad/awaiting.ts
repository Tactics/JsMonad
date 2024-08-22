// Step 1: Create a unique symbol to tag the class
import { AsyncResult } from "@/monad/result";

const AwaitingSymbol = Symbol("JsMonadAwaitingSymbol");

// Step 2: Define the Awaiting class and tag it with the symbol
export interface AwaitingI {}

export class Awaiting implements AwaitingI {
  // Tagging the class with the symbol
  [AwaitingSymbol] = true;
}

// Returns 'True' when one value is instance of Awaiting.
export function isAwaiting<T>(obj: AsyncResult<T>): obj is Awaiting {
  return obj && (obj as Awaiting)[AwaitingSymbol] === true;
}
