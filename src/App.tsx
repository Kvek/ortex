import { Container, Content, AppHeader } from "./App.styles";
import { Login } from "./Login";
import { Logo } from "./Logo";
import { Ticker } from "./Ticker";

const App = () => (
  <Container>
    <AppHeader>
      <Logo />
    </AppHeader>

    <Content>
      <Ticker />
      <Login />
    </Content>
  </Container>
);

export default App;
