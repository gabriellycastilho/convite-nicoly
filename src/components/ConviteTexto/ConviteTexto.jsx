import { motion } from "framer-motion";
import NomeNicoly from "../NomeNicoly/NomeNicoly";
import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui";
import "./ConviteTexto.css";
import { useRef } from "react";
import useScrollLockOnView from "../../hooks/useScrollLockOnView";

export default function ConviteTexto({ setScrollLocked }) {
  const sectionRef = useRef();

  useScrollLockOnView(sectionRef, setScrollLocked);

  return (
    <section ref={sectionRef} className="convite-texto" id="convite-texto">
      <motion.div
        className="convite-nome"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <NomeNicoly />
      </motion.div>

      <motion.p
        className="convite-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Entre <span className="bold-text">castelos</span>, <span className="bold-text">flores</span> e <span className="bold-text">luzes</span>, viveremos uma noite de <span className="bold-text">encanto</span> e eternas <span className="bold-text">memórias</span>.
        Cada detalhe foi preparado com <span className="bold-text">carinho</span> para transformar este sonho em <span className="bold-text">realidade</span>, celebrando os <span className="bold-text">15 anos</span> de uma princesa que sempre iluminou nossas <span className="bold-text">vidas</span>.
        Venha fazer parte desta <span className="bold-text">história mágica</span>, que ficará guardada para sempre em nossos <span className="bold-text">corações</span>.
      </motion.p>

      <motion.p
        className="convite-subintro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Venha celebrar os meus <span className="bold-text">15 anos</span>, a realizar-se em:
      </motion.p>

      <BotaoCliqueAqui targetId="convite-data" setScrollLocked={setScrollLocked} />
    </section>
  );
}







