/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type MyExlude<T, K> = T extends K ? never : T;

// type MyReadonly2<T, K> = {
//    [P in keyof T as P extends K ? P : never]: T[P] & { readonly [k in K]: T[k] }
// }


// type MyExcludeTest<T, K> = T extends K ? never : T;

// type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [k in K]: T[k]} & { [k in MyExcludeTest<keyof T, K>]: T[k] }

type MyReadonly2<T, K extends keyof T = keyof T> = {
   [p in keyof T as p extends K? never: p]: T[p]
 } & {
   readonly [p in K]: T[p]
 }