import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import NomeNicoly from "../NomeNicoly/NomeNicoly";
import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui";
import "./ConviteTexto.css";

export default function ConviteTexto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const nomeAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="convite-texto"
      id="convite-texto"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="convite-nome"
        variants={nomeAnimation}
      >
        <NomeNicoly />
      </motion.div>

      <motion.p className="convite-intro" variants={textAnimation}>
        Entre <span className="bold-text">castelos</span>, <span className="bold-text">flores</span> e{" "}
        <span className="bold-text">luzes</span>, viveremos uma noite de <span className="bold-text">encanto</span> e eternas{" "}
        <span className="bold-text">memórias</span>. Cada detalhe foi preparado com <span className="bold-text">carinho</span> para
        transformar este sonho em <span className="bold-text">realidade</span>, celebrando os <span className="bold-text">15 anos</span>{" "}
        de uma princesa que sempre iluminou nossas <span className="bold-text">vidas</span>. Venha fazer parte desta{" "}
        <span className="bold-text">história mágica</span>, que ficará guardada para sempre em nossos{" "}
        <span className="bold-text">corações</span>.
      </motion.p>

      <motion.p
        className="convite-subintro"
        variants={textAnimation}
        transition={{ delay: 0.2 }}
      >
        Venha celebrar os meus <span className="bold-text">15 anos</span>, a realizar-se em:
      </motion.p>

      <BotaoCliqueAqui targetId="convite-data" />
    </motion.section>
  );
}








