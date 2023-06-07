/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type MyCapitalize<S extends string> =S extends `${infer R}${infer S}`?`${Uppercase<R>}${S}`:S;
