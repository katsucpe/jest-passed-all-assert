/// <reference types="jest" />

declare namespace jest {
  // noinspection JSUnusedGlobalSymbols
  interface Matchers<R> {
    /**
     * Use `.toPassedAllAssert` when checking if an `Array` of function and return passed results.
     * @param {Array.<*>} callbacks
     */
    toPassedAllAssert(callbacks: any[]): R;
  }

  // noinspection JSUnusedGlobalSymbols
  interface Expect {
     /**
     * Use `.toPassedAllAssert` when checking if an `Array` of function and return passed results.
     * @param {Array.<*>} callbacks
     */
    toPassedAllAssert(callbacks: any[]): any;
  }
}