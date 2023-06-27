/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type Shift<T> = T extends [any,...infer B]?B:[]
