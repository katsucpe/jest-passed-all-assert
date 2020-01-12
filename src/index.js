function toPassedAllAssert (received) {
  const errList = []
  received.forEach((element, index) => {
    try {
      element()
    } catch (err) {
      if (err.matcherResult) {
        errList.push({ index: index, message: err.matcherResult.message() })
      } else {
        errList.push({ index: index, message: err.message })
      }
    }
  })
  const errmsg = errList.reduce((acc, i) => {
    return `${acc}\nFAILED CONDITION#${i.index + 1}.\n${i.message}\n-----\n`
  }, '')

  return {
    pass: errList.length === 0,
    message: () => errmsg
  }
}

const jestExpect = global.expect

if (jestExpect !== undefined) {
  jestExpect.extend(toPassedAllAssert)
} else {
  /* eslint-disable no-console */
  console.error(
    'Unable to find Jest\'s global expect.' +
      '\nPlease check you have added jest-extended correctly to your jest configuration.' +
      '\nSee https://github.com/jest-community/jest-extended#setup for help.'
  )
  /* eslint-enable no-console */
}
