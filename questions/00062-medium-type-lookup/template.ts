/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type LookUp<U, T extends string> = {
//    [K in keyof U]: U[K] extends T ? U[K] : never
// }

type LookUp<U, T extends string> = U extends { type: T } ? U : never
