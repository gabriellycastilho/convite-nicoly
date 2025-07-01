import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Regras.css";
import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui"; 

export default function Regras({ showScrollTop }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const regras = [
    { id: 1, texto: <><span className="bold-text">Traje:</span> esporte fino;</> },
    { id: 2, texto: <><span className="bold-text">Não usar cores:</span> lilás, roxo e prata;</> },
    { id: 3, texto: <>A festa começa às <span className="bold-text">19h</span> e termina às <span className="bold-text">00h;</span></> },
    { id: 4, texto: <>Confirme sua presença até <span className="bold-text">01/10.</span></> },
    { id: 5, texto: <>Use a hashtag <span className="bold-text">#NicFaz15</span> ao postar uma foto ou vídeo na nossa festa.</> },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="convite-regras" className="regras-container" ref={ref}>
      <motion.div
        className="regras-card"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Se prepare para o grande dia:
        </motion.h2>

        <ul className="regras-lista">
          {regras.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.3, duration: 0.6 }}
            >
              {item.texto}
            </motion.li>
          ))}
        </ul>

        <BotaoCliqueAqui targetId="convite-footer" />
      </motion.div>

      {/* Só renderiza o botão se showScrollTop for true */}
      {showScrollTop && (
        <button
          className="btn-voltar-topo"
          onClick={scrollToTop}
          aria-label="Voltar para o topo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </section>
  );
}




