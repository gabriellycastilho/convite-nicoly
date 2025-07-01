import "./Hero.css";
import luzesVideo from "../../assets/videos/rapunzelfootervideo.mov";
import BotaoCliqueAqui from "../BotaoCliqueAqui/BotaoCliqueAqui"; 
import { motion } from "framer-motion";


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
       <motion.h1
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 3, ease: "easeOut" }}
>
  O Sonho Está Prestes a se Realizar!
</motion.h1>

        <BotaoCliqueAqui targetId="convite-texto" />
      </div>
    </section>
  );
}



