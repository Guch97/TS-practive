/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// [1,[2]]
// Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
// 1,[2]
// [1],[2]
type Flatten<T> = T extends []?[] :T extends [infer R, ...infer Y] ?
   [...Flatten<R>, ...Flatten<Y>]
   : [T]

// type Flatten<T> = T extends []
// ? [] 
// : T extends [infer First, ...infer Rest]
//    ? [...Flatten<First>, ...Flatten<Rest>]
//    : [T]
