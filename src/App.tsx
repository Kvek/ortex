import { Container, Content, AppHeader } from "./App.styles";
import { Logo } from "./Logo";

const App = () => (
  <Container>
    <AppHeader>
      <Logo />
    </AppHeader>

    <Content />
  </Container>
);

export default App;
