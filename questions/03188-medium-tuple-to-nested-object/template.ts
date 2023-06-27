/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type TupleToNestedObject<T, U> = T extends [infer F, ...infer R] ?
   {
      [K in F&string]:TupleToNestedObject<R,U>
   }
   : U
