import { Linter } from 'eslint'

declare const eslintConfig: Linter.Config[]

declare module 'eslint-config-futured-nest' {
  export default eslintConfig
}
