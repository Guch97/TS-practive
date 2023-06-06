/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type First<T extends any[]> = T extends []? never:T[0]