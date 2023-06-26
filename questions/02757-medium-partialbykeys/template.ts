/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type PartialByKeys<T, K> = {
//    [K in keyof T]?:T[K]
// }


type IntersectionToObj<T> = {
   [K in keyof T]: T[K]
 }
 type PartialByKeys<T , K = any> = IntersectionToObj<{
   [P in keyof T as P extends K ? P : never]?: T[P]
 }
    & {
   [P in Exclude<keyof T, K>]: T[P]
 }>