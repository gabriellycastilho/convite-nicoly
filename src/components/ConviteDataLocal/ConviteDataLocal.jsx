import "./ConviteDataLocal.css";
import MolduraCima from "../../assets/svg/molduracimadatalocal.svg";
import MolduraBaixo from "../../assets/svg/moldurabaixodatalocal.svg";
 import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui";

export default function ConviteDataLocal() {
  return (
    <div id="convite-data" className="convite-container">
      <div className="data">
         <img className="Moldura cima" src={MolduraCima} alt="Moldura cima" />
        <p className="mes">NOVEMBRO</p>
        <h1>
          <span className="sabado">SÁB |</span>
          <span className="dia">01</span>
          <span className="sete-horas">| 19:00</span>
        </h1>
        <p className="ano">2025</p>
      </div>
      <p className="local">
        Espaço Cristallis: R. Dr. João Carlos Azevedo, Vila Bandeirantes, Mauá - SP
      </p>
       <BotaoCliqueAqui targetId="convite-acoes"/>
      <img className="Moldura baixo" src={MolduraBaixo} alt="Moldura baixo" />
    </div>
  );
}


