type Space2 = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${Space2}${infer R}` ? Trim<R> : S extends `${infer R}${Space2}` ? Trim<R> : S
