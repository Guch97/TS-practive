/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type Last<T extends any[]> = T extends [] ? never : [any, ...T][T['length']]


