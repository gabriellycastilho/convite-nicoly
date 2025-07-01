import "./Hero.css";
import luzesVideo from "../../assets/videos/rapunzelvideohero.mp4";
import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui"; 
import { useRef } from "react";
import useScrollLockOnView from "../../hooks/useScrollLockOnView";

export default function Hero({ setScrollLocked }) {
  const sectionRef = useRef();

  useScrollLockOnView(sectionRef, setScrollLocked);

  return (
    <section className="hero" ref={sectionRef}>
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
        <BotaoCliqueAqui targetId="convite-texto" setScrollLocked={setScrollLocked} />
      </div>
    </section>
  );
}




