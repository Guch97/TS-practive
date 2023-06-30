/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type IsTuple<T> = T extends readonly any[]? number extends T['length']?true:false:false
type IsTuple<T> = 
[T] extends [never] ?false:
  T extends readonly any[]?
    number extends T['length']?false:true
  :false
