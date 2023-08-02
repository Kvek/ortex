import { Container, AppHeader, Content } from "./App.styles";
import { Login } from "./Login";
import { Logo } from "./Logo";

const App = () => (
  <Container>
    <AppHeader>
      <Logo />
    </AppHeader>

    <Content>
      <Login />
    </Content>
  </Container>
);

export default App;
