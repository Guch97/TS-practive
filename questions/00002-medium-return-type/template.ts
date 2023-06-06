/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type MyReturnType<T extends Function> = T extends (...args: any) => infer R ? R : never