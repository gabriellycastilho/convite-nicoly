import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./BotoesAcoes.css";
import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui";

export default function BotoesAcoes() {
  const [copiado, setCopiado] = useState(false);
  const [mostrarPix, setMostrarPix] = useState(false);
  const [mostrarPresentes, setMostrarPresentes] = useState(false);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const abrirWhatsapp = () => {
    window.open(
      "https://wa.me/5511995922290?text=Olá! Quero confirmar presença na festa da Nic! Meu nome é:  .",
      "_blank"
    );
  };

  const abrirMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Espa%C3%A7o+Cristallis/@-23.663834,-46.4300311,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce6f92ee80b511:0xdff8071bd28f0a4!8m2!3d-23.663834!4d-46.4300311!16s%2Fg%2F11fl5kz8w9?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const buttons = [
    { id: "confirmar", text: "CONFIRMAR PRESENÇA", onClick: abrirWhatsapp, className: "btn primario" },
    { id: "pix", text: "ME PRESENTEIE COM PIX", onClick: () => setMostrarPix(true), className: "btn secundario" },
    { id: "presentes", text: "DICAS PARA PRESENTE", onClick: () => setMostrarPresentes(true), className: "btn primario" },
    { id: "maps", text: "VER LOCAL NO MAPA", onClick: abrirMaps, className: "btn secundario" },
  ];

  // Variants do container para controlar o stagger dos filhos
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants para cada botão: sumir e aparecer com movimento
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="convite-acoes"
      className="botoes-acoes"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {buttons.map((btn) => (
        <motion.button
          key={btn.id}
          className={btn.className}
          onClick={btn.onClick}
          variants={buttonVariants}
        >
          {btn.text}
        </motion.button>
      ))}

      <BotaoCliqueAqui targetId="convite-regras" />

      {mostrarPix && (
        <motion.div
          className="modal-overlay"
          onClick={() => setMostrarPix(false)}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Chave PIX da Nic:</h2>
            <h3>NICOLY CRISTINE DA SILVA SANTOS</h3>
            <p>
              <strong>Telefone:</strong> 11 952158379{" "}
              <button
                className="btn-copiar"
                onClick={() => {
                  navigator.clipboard.writeText("11952158379");
                  setCopiado(true);
                  setTimeout(() => setCopiado(false), 2000);
                }}
              >
                {copiado ? "Copiado!" : "Copiar"}
              </button>
            </p>
            <button onClick={() => setMostrarPix(false)}>Fechar</button>
          </motion.div>
        </motion.div>
      )}

      {mostrarPresentes && (
        <motion.div
          className="modal-overlay"
          onClick={() => setMostrarPresentes(false)}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Dicas de Presentes</h2>
            <ul>
              <li><strong>Calçados:</strong> Tênis/Sandália/Salto - N°36/37</li>
              <li><strong>Roupas:</strong> Blusas/Cropped/Vestido Longo ou Curto - TAM:P</li>
              <li><strong>Roupas:</strong> Calça/Shorts/Saia Longa ou Curta - N°36</li>
              <li><strong>Perfume/Body Splash/Creme:</strong> Doce ou Floral</li>
              <li><strong>Acessórios:</strong> Colares/Anéis/Brincos/Pulseiras (preferência prata)</li>
              <li><strong>Bolsas:</strong> Estilo Transversal</li>
              <li><strong>Cores para roupa:</strong> Marrom, Preto, Branco, Off White, Cinza, Azul Claro, Rosa Claro</li>
              <li><strong>Cores para calçados:</strong> Bege, Marrom, Preto, Branco, Dourado, Prata</li>
              <li><strong>Blusa de frio:</strong> Suéter de Tricot/Moletom/Corta-vento</li>
            </ul>
            <button onClick={() => setMostrarPresentes(false)}>Fechar</button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}









