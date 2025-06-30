    import { motion } from "framer-motion";
    import NomeNicoly from "../NomeNicoly/NomeNicoly";
    import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui";
    import "./ConviteTexto.css";

export default function ConviteTexto() {
  return (
    <section className="convite-texto" id="convite-texto">
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
        
        Entre castelos, flores e luzes, viveremos uma noite de encanto e eternas memórias.
Cada detalhe foi preparado com carinho para transformar este sonho em realidade, celebrando os 15 anos de uma princesa que sempre iluminou nossas vidas.
Venha fazer parte desta história mágica, que ficará guardada para sempre em nossos corações.
      </motion.p>

      <motion.p
        className="convite-subintro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Venha celebrar os meus 15 anos, a realizar-se em:
      </motion.p>
      <BotaoCliqueAqui targetId="convite-container"/>
    </section>
  );
}





