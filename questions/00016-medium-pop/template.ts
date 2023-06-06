/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type Pop<T extends any[]> = T extends [...infer R, infer _]?R:[];

