/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type OmitByType<T, U> = {
   [K in keyof T as T[K] extends U?never:K]:T[K]  
}

