/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type TupleToUnion<T> = T extends Array<infer R>?R:never;
