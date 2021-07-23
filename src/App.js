import Content from "./components/Content";
import Footer from "./components/Footer";
import { Container } from "./components/GlobalComponents";
import Header from "./components/Header";
import Theme from "./styles/Theme";

function App() {
  return (
    <Theme>
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </Theme>
  );
}

export default App;
