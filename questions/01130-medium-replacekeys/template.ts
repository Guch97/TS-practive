/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type ReplaceKeys<U, T, Y> = {
   [K in keyof U ]:K extends T?K extends keyof Y ? Y[K] : never :U[K]
}

// type ReplaceKeys<U, T, Y> = { [K in keyof U]: K extends T ? K extends keyof Y ? Y[K] : never : U[K] }
