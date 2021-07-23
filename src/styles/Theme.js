import { ThemeProvider } from "styled-components";
import theme from "../themes/default";
import GlobalStyles from "./Global";

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
