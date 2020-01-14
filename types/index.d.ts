/// <reference types="jest" />

declare namespace jest {
  // noinspection JSUnusedGlobalSymbols
  interface Matchers<R> {
    /**
     * Use `.toPassedAllAssert` when checking if an `Array` of function and return passed results.
     * ```
     * let testCollection = [
     *    () => expect(response.status).toEqual(HttpStatus.OK),
     *    () => expect(response.data.id).toEqual(id.toString())
     *  ]
     * expect(testCollection).toPassedAllAssert()
     * ```
     */
    toPassedAllAssert(): R;
  }

  // noinspection JSUnusedGlobalSymbols
  interface Expect {
     /**
     * Use `.toPassedAllAssert` when checking if an `Array` of function and return passed results.
     * ```
     * let testCollection = [
     *    () => expect(response.status).toEqual(HttpStatus.OK),
     *    () => expect(response.data.id).toEqual(id.toString())
     *  ]
     * expect(testCollection).toPassedAllAssert()
     * ```
     */
    toPassedAllAssert(): any;
  }
}