import { useState } from "react";
import "./BotoesAcoes.css";

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

  return (
    <div className="botoes-acoes">
      <button className="btn primario" onClick={abrirWhatsapp}>
        Confirmar Presença
      </button>

      <button className="btn secundario" onClick={() => setMostrarPix(true)}>
        Me Presenteie com PIX
      </button>

      <button className="btn secundario" onClick={() => setMostrarPresentes(true)}>
        Para Me Presentear
      </button>

      <button className="btn primario" onClick={abrirMaps}>
        Saiba Como Chegar
      </button>

      {mostrarPix && (
        <div className="modal-overlay" onClick={() => setMostrarPix(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Chave PIX da Nicóly</h2>
            <p><strong>CPF:</strong> 123.456.789-00</p>
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

