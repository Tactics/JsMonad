import { Contexts } from "@/monad/context/contexts";
import { Context } from "@/monad/context/context";
import { OptionalResult } from "@/monad/result";
import { Some } from "@/monad/monads/optional/some";
import { None } from "@/monad/monads/optional/none";

export class ContextCollection implements Contexts {
  private contexts: { [key: string]: Context } = {};

  static empty(): ContextCollection {
    return new ContextCollection();
  }

  get(key: string): OptionalResult<Context> {
    return this.contexts[key] ? Some.of(this.contexts[key]) : None.of();
  }

  add(key: string, context: Context): ContextCollection {
    const newCollection = new ContextCollection();
    newCollection.contexts = { ...this.contexts };
    newCollection.contexts[key] = context;
    return newCollection;
  }

  remove(key: string): ContextCollection {
    const newCollection = new ContextCollection();
    newCollection.contexts = { ...this.contexts };
    delete newCollection.contexts[key];
    return newCollection;
  }

  *[Symbol.iterator](): Iterator<Context> {
    for (const key in this.contexts) {
      yield this.contexts[key];
    }
  }
}
