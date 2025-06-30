import "./index.css";
import "./styles/variables.css";
import Hero from "./components/Hero/Hero";
import ConviteTexto from "./components/ConviteTexto/ConviteTexto";
import ConviteDataLocal from "./components/ConviteDataLocal/ConviteDataLocal";
import BotoesAcoes from "./components/BotoesAcoes/BotoesAcoes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <ConviteTexto />
      <ConviteDataLocal />
      <BotoesAcoes />
      <Footer />
    </div>
  );
}

export default App;
