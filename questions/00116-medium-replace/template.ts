/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */


type Replace<S extends string, From extends string, To extends string> = From extends '' ?
   S : S extends `${infer V}${From}${infer R}` ?
   `${V}${To}${R}` : S
