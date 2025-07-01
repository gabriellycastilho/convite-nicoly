import { motion } from "framer-motion";
import "./ConviteDataLocal.css";
import MolduraCima from "../../assets/svg/molduracimadatalocal.svg";
import MolduraBaixo from "../../assets/svg/moldurabaixodatalocal.svg";
import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui";

export default function ConviteDataLocal() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="convite-data" className="convite-container">
      <img
        className="Moldura cima"
        src={MolduraCima}
        alt="Moldura cima"
      />
      <motion.div
        className="data"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
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
      <p className="local">
        Espaço Cristallis: R. Dr. João Carlos Azevedo, Vila Bandeirantes, Mauá - SP
      </p>
      <div>
        <BotaoCliqueAqui targetId="convite-acoes" />
      </div>
      <img
        className="Moldura baixo"
        src={MolduraBaixo}
        alt="Moldura baixo"
      />
    </div>
  );
}







