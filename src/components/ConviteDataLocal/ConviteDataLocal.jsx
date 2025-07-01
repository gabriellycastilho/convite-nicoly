import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ConviteDataLocal.css";
import MolduraCima from "../../assets/svg/molduracimadatalocal.svg";
import MolduraBaixo from "../../assets/svg/moldurabaixodatalocal.svg";
import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui";

export default function ConviteDataLocal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      id="convite-data"
      className="convite-container"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="data" variants={itemVariants}>
        <motion.img
          className="Moldura cima"
          src={MolduraCima}
          alt="Moldura cima"
          variants={itemVariants}
        />
        <motion.p className="mes" variants={itemVariants}>
          NOVEMBRO
        </motion.p>
        <motion.h1 variants={itemVariants}>
          <motion.span className="sabado" variants={itemVariants}>
            SÁB |
          </motion.span>
          <motion.span className="dia" variants={itemVariants}>
            01
          </motion.span>
          <motion.span className="sete-horas" variants={itemVariants}>
            | 19:00
          </motion.span>
        </motion.h1>
        <motion.p className="ano" variants={itemVariants}>
          2025
        </motion.p>
      </motion.div>
      <motion.p className="local" variants={itemVariants}>
        Espaço Cristallis: R. Dr. João Carlos Azevedo, Vila Bandeirantes, Mauá - SP
      </motion.p>
      <motion.div variants={itemVariants}>
        <BotaoCliqueAqui targetId="convite-acoes" />
      </motion.div>
      <motion.img
        className="Moldura baixo"
        src={MolduraBaixo}
        alt="Moldura baixo"
        variants={itemVariants}
      />
    </motion.div>
  );
}



