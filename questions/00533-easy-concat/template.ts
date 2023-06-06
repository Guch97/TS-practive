/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type Concat<T extends readonly any[], U extends readonly any[]> = [...T,...U]
