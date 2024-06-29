declare global {
  type BreakDownObject<O, R = void> = {
    [K in keyof O as string]: K extends string
      ? R extends string
        ? ObjectDotNotation<O[K], `${R}.${K}`>
        : ObjectDotNotation<O[K], K>
      : never;
  };

  /**
   * Get the dot notation of an object and its nested objects
   */
  type ObjectDotNotation<O, R = void> = O extends string
    ? R extends string
      ? R
      : never
    : BreakDownObject<O, R>[keyof BreakDownObject<O, R>];
}
export {};
