/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type TupleToObject<T extends readonly any[]> = {
   [K in  T[number]]:K
}
