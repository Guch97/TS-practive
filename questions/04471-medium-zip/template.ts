// type Zip<T, U> = T extends [infer A,...infer R]?
// U extends [infer B, ...infer C]?[[A,B],[Zip<R,C>]]:[]
// :[]


type Zip<T extends any[], U extends any[]> =
[T, U] extends [[infer L, ...infer RestT], [infer R, ...infer RestU]]
? [[L, R], ...Zip<RestT, RestU>]
: []