import "styled-components";

import theme from "./theme/dark";

export type Theme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
