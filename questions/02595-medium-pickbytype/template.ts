/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type PickByType<T, U> = {
   [K in keyof T  as T[K] extends U ? K : never]: T[K]
}
