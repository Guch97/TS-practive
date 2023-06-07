/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type ReplaceAll<S extends string, From extends string, To extends string> = any


type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ?
   S : S extends `${infer R1}${From}${infer R2}` ?
   `${R1}${To}${ReplaceAll<R2, From, To>}` : S