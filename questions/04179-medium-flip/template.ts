/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type Flip<T extends Record<string, string | number | boolean>> = {
   [K in keyof T as `${T[K]}`]: K
}
