type MinusOne<T extends number, A extends string[] = []> = 0 extends 1
  ? never
  : ['', ...A]['length'] extends T
  ? A['length']
  : MinusOne<T, ['', ...A]>
