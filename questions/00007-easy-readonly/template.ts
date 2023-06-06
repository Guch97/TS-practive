/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type MyReadonly<T> = {
   readonly [K in keyof T]  :T[K]
}
