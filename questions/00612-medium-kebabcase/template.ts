/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
type KebabCase<S> = S extends `${infer R}${infer R2}`?
R2 extends Uncapitalize<R2> ? `${Uncapitalize<R>}${KebabCase<R2>}` :
`${Uncapitalize<R>}-${KebabCase<R2>}`
: S
