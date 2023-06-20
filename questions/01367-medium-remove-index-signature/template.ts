/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type RemoveIndexSignature<T> = { [k in keyof T as string extends k ? never : number extends k? never : symbol extends k ? never : k]: T[k] }