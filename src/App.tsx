import { ThemeProvider } from "styled-components";
import { Page } from "./Page";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Page />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
