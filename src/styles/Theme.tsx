import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {},
  fonts: ["Roboto", "sans-serif"],
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
  breakpoints: {
    xxxs: 400,
    xxs: 500,
    xs: 600,
    xsm: 750,
    sm: 960,
    md: 1280,
    lg: 1960,
  },
};

type ThemeProps = {
  children: ReactNode;
};

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
