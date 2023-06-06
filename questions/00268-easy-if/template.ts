/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type If<C, T, F> = C extends true ? T : F
