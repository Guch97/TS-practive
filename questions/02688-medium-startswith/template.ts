/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type StartsWith<T extends string, U extends string> =  T extends `${U}${string}`? true:false
