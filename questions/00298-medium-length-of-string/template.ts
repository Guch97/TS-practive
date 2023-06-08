/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type LengthOfString2<S extends string, T extends string[] = []> =
S extends `${infer R}${infer S}` ?
   LengthOfString2<S, [...T, R]> : T['length']
