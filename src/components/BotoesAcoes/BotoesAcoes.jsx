import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BotoesAcoes.css";
import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui";


export default function BotoesAcoes() {
  const [mostrarPix, setMostrarPix] = useState(false);
  const [mostrarPresentes, setMostrarPresentes] = useState(false);

  const abrirWhatsapp = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá! Quero confirmar presença na festa da Nicóly 🎉",
      "_blank"
    );
  };

  const abrirMaps = () => {
    window.open("https://goo.gl/maps/exemplo", "_blank");
  };

  const buttons = [
    {
      id: "confirmar",
      text: "CONFIRMAR PRESENÇA",
      onClick: abrirWhatsapp,
      className: "btn primario",
    },
    {
      id: "pix",
      text: "ME PRESENTEIE COM PIX",
      onClick: () => setMostrarPix(true),
      className: "btn secundario",
    },
    {
      id: "presentes",
      text: "DICAS PARA PRESENTE",
      onClick: () => setMostrarPresentes(true),
      className: "btn primario",
    },
    {
      id: "maps",
      text: "SAIBA COMO CHEGAR",
      onClick: abrirMaps,
      className: "btn secundario",
    },
  ];

  return (
    <div className="botoes-acoes">
      {buttons.map((btn, index) => (
        <motion.button
          key={btn.id}
          className={btn.className}
          onClick={btn.onClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.6, ease: "easeOut" }}
        >
          {btn.text}
        </motion.button>
      ))}

      <BotaoCliqueAqui targetId="convite-container" />

      {mostrarPix && (
        <div className="modal-overlay" onClick={() => setMostrarPix(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Chave PIX da Nic:</h2>
            <p><strong>Telefone:</strong> 11 952158379</p>
            <img src="/assets/pix-qrcode.png" alt="QR Code PIX" className="pix-qrcode" />
            <button onClick={() => setMostrarPix(false)}>Fechar</button>
          </div>
        </div>
      )}

      {mostrarPresentes && (
        <div className="modal-overlay" onClick={() => setMostrarPresentes(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Lista de Presentes</h2>
            <ul>
              <li>Jóias delicadas</li>
              <li>Perfumes finos</li>
              <li>Livros de contos de fada</li>
              <li>Roupas elegantes</li>
              <li>Experiências mágicas</li>
            </ul>
            <button onClick={() => setMostrarPresentes(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}


