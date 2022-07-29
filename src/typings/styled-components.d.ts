import 'styled-components';
import { darkTheme } from './../utils/theme';

type CustomTheme = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
