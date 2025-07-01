import "./Hero.css";
import luzesVideo from "../../assets/videos/rapunzelvideo.mp4";
import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui"; 

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={luzesVideo} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
      <div className="hero-content">
        <h1>O Sonho Está Prestes a se Realizar!</h1>
        <BotaoCliqueAqui targetId="convite-texto" />
      </div>
    </section>
  );
}



