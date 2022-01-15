import "styled-components"

/***********
*  Types(tipagem) do theme
*/

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      blue: string
    }
  }
}
