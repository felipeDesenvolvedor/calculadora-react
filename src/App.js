import Teclado from "./components/Teclado";
import Container from "./components/Container";

import "./style/reset.css";
import "./style/config.css";
import "./style/display.css";
import "./style/teclado.css";


function App() {
  return (
    <Container>
      <Teclado/>
    </Container>
  );
}

export default App;
