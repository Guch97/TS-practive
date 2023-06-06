/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type Chainable = {
  option(key: string, value: any): any
  get(): any
}

// type Chainable<T = {}> = {
//   option: <K extends string|number, V>(key: K extends keyof T ? never : K, value: V)=> Chainable<T & Record<K, V>>
//   get: () => T
// }