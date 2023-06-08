/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type AppendToObject<T, U extends string, V> = {
   [K in keyof T | U]: K extends keyof T ? T[K] : V
}
// type AppendToObject<T, U extends keyof any, V> = {
//    [K in keyof T | U]: K extends keyof T ? T[K] : V;
//  };