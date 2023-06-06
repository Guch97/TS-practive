/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type MyPick<T, K extends keyof T> = {
   [k in K]: T[k]
}
