import React from "react";
import { ThemeProvider } from 'styled-components';
import { colors } from './../src/utils/colors';
import GlobalStyles from './../src/utils/globalStyles';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

