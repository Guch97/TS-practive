/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}`?`${R}`:`${T}`
