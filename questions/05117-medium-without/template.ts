/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type Without<T, U> = T extends [infer R, ...infer F] ?
   R extends U ?
   Without<F, U> :
   [R, ...Without<F, U>]
   : T
