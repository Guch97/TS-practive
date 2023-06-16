/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type Merge<F, S> = {
   [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}
