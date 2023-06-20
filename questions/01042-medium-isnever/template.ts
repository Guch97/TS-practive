/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */


// type IsNever<T> = [T] extends [never] ? true : false 
type IsNever<T> = IsEqual<never, T>

