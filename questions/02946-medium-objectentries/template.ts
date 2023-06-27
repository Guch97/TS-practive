/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type ObjectEntries<T> = [keyof T,T[K in keyof T]]

type ObjectEntries<T> = {
   [K in keyof T]-?: [K, T[K]]
 }[keyof T]
