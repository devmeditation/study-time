import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaults";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
    </ThemeProvider>
  );
}
