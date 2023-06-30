/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type Reverse<T> = T extends []?[]:[]

// a b c       bc   c  b a
type Reverse<T> = T extends [infer A,...infer B]?[...Reverse<B>, A]:T

