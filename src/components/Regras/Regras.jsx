import { motion } from "framer-motion";
import "./Regras.css";

export default function Regras() {
  return (
    <section className="regras-container">
      <motion.div
        className="regras-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Se prepare para o grande dia:
        </motion.h2>

        <motion.ul
          className="regras-lista"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <li><span className="bold-text">Traje:</span> esporte fino;</li>
          <li><span className="bold-text">Não usar cores:</span> lilás, roxo e dourado;</li>
          <li>A festa começa às <span className="bold-text">19h</span> e termina às <span className="bold-text">00h;</span></li>
          <li>Confirme sua presença até <span className="bold-text">01/10.</span></li>
        </motion.ul>
      </motion.div>
    </section>
  );
}
