type FlipArguments<T> = T extends (...args:infer A)=>infer U?(...args: Reverse<A>) => U:never
