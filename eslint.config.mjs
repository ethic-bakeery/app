import next from 'next/core-web-vitals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...next,
  {
    rules: {
      'react/no-unescaped-entities': 'off'
    }
  }
]