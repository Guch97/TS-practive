type Diff<O, O1> = {
   [K in keyof O | keyof O1 as Exclude <K, keyof O & keyof O1>]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never;
}
