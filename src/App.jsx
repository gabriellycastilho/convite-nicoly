import { useState, useEffect } from "react";
import "./index.css";
import "./styles/variables.css";
import Hero from "./components/Hero/Hero";
import ConviteTexto from "./components/ConviteTexto/ConviteTexto";
import ConviteDataLocal from "./components/ConviteDataLocal/ConviteDataLocal";
import BotoesAcoes from "./components/BotoesAcoes/BotoesAcoes";
import Regras from "./components/Regras/Regras";
import Footer from "./components/Footer/Footer";

function App() {
  const [unlockedSection, setUnlockedSection] = useState(0); // qual seção liberada (0 = hero)

  // Bloqueia scroll se o usuário não tiver liberado a seção atual
  useEffect(() => {
    if (unlockedSection < 5) {
      // trava scroll enquanto não liberou a última seção (5 = footer)
      document.body.style.overflow = "hidden";
    } else {
      // libera scroll no final
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // limpa no unmount
    };
  }, [unlockedSection]);

  // Função para liberar próxima seção e rolar até ela
  const unlockNextSection = () => {
    const next = unlockedSection + 1;
    if (next > 5) return; // evita passar do footer

    setUnlockedSection(next);

    // Rola pra próxima seção depois de liberar
    setTimeout(() => {
      const nextSectionEl = document.getElementById(`section-${next}`);
      if (nextSectionEl) {
        nextSectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // espera um pouco pra garantir atualização
  };

  return (
    <div className="App">
      <div id="section-0">
        <Hero
          isUnlocked={unlockedSection >= 0}
          onUnlock={unlockNextSection}
          isLocked={unlockedSection === 0}
        />
      </div>

      <div id="section-1">
        <ConviteTexto
          isUnlocked={unlockedSection >= 1}
          onUnlock={unlockNextSection}
          isLocked={unlockedSection === 1}
        />
      </div>

      <div id="section-2">
        <ConviteDataLocal
          isUnlocked={unlockedSection >= 2}
          onUnlock={unlockNextSection}
          isLocked={unlockedSection === 2}
        />
      </div>

      <div id="section-3">
        <BotoesAcoes
          isUnlocked={unlockedSection >= 3}
          onUnlock={unlockNextSection}
          isLocked={unlockedSection === 3}
        />
      </div>

      <div id="section-4">
        <Regras
          isUnlocked={unlockedSection >= 4}
          onUnlock={unlockNextSection}
          isLocked={unlockedSection === 4}
        />
      </div>

      <div id="section-5">
        <Footer isUnlocked={unlockedSection >= 5} />
      </div>
    </div>
  );
}

export default App;


