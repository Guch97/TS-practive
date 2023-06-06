/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
// type Includes<T extends readonly any[], U> =U extends keyof T?true:false

// type Includes<T extends readonly any[], U> = {
//    [P in T[number]]: true
//  }[U] extends true ? true : false;

// type IsEqual<T, U> =
// 	(<G>() => G extends T ? 1 : 2) extends
// 	(<G>() => G extends U ? 1 : 2)
// 		? true
// 		: false;

/**
Returns a boolean for whether given two types are equal.
@link https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
*/
type IsEqual<T, U> =
	(<G>() => G extends T ? 1 : 2) extends
	(<G>() => G extends U ? 1 : 2)
		? true
		: false;

type Includes<Value extends any[], Item> =
	IsEqual<Value[0], Iteßm> extends true
		? true
		: Value extends [Value[0], ...infer rest]
			? Includes<rest, Item>
			: false;