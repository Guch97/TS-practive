/*
 * @Author: xs
 * @Date: 2023-06-05 13:50:23
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString2<''>, 0>>,
  Expect<Equal<LengthOfString2<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString2<'reina'>, 5>>,
  Expect<Equal<LengthOfString2<'Sound! Euphonium'>, 16>>,
]
