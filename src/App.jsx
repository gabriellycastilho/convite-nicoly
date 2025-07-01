import { useState, useEffect, useRef } from "react";
import "./index.css";
import "./styles/variables.css";
import Hero from "./components/Hero/Hero";
import ConviteTexto from "./components/ConviteTexto/ConviteTexto";
import ConviteDataLocal from "./components/ConviteDataLocal/ConviteDataLocal";
import BotoesAcoes from "./components/BotoesAcoes/BotoesAcoes";
import Regras from "./components/Regras/Regras";
import Footer from "./components/Footer/Footer";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    // Começa mudo para permitir autoplay em alguns navegadores
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play().catch(() => {
        // Pode falhar, aí espera interação
      });
    }

    // Quando o usuário clicar ou tocar, desmuta e toca o áudio
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play();
      }
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <div className="App">
      <Hero />
      <ConviteTexto />
      <ConviteDataLocal />
      <BotoesAcoes showScrollTop={showScrollTop} />
      <Regras showScrollTop={showScrollTop} />
      <Footer />

      {/* Áudio invisível tocando em loop */}
      <audio ref={audioRef} autoPlay loop style={{ display: "none" }}>
        <source src="/audioconvite.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>
    </div>
  );
}

export default App;


