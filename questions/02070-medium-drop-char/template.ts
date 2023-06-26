/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type DropChar<S, C> = S extends `${infer T} ${infer R}` ? T extends C ? `${R}` : DropChar<R, C> : never


// type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}` ? DropChar<`${L}${R}`, C> : S;

// your answers
type DropChar<S, C> = S extends `${infer X}${infer Y}` ? `${X extends C ? "" : X}${DropChar<Y, C>}` : ""
