/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type MyAwaited<T> = T extends Promise<infer R>
//    ? R extends Promise<any>
//       ? MyAwaited<R>
//       : R
//    : never


type MyAwaited<T extends PromiseLike<any | PromiseLike<any>>> =
T extends PromiseLike<infer V>
   ? V extends PromiseLike<any>
      ? MyAwaited<V>
      : V
   : never