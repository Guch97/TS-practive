/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type DeepReadonly<T> = keyof T extends never ? T : {
//   readonly [p in keyof T]: DeepReadonly<T[p]>
// }


type DeepReadonly<T> = {
   readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
 }
