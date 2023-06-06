/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type MyExclude<T, U > = T extends U?never:T
