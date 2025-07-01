import { motion } from "framer-motion";
import { useRef } from "react";
import rapunzelFooterVideo from "../../assets/videos/rapunzelfootervideo.mov";
import ContagemRegressiva from "../ContagemRegressiva/ContagemRegressiva";
import "./Footer.css";

export default function Footer() {
  const footerRef = useRef(null);

  return (
    <footer id="convite-footer" className="footer" ref={footerRef}>
      <motion.video
        className="footer-video"
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}  // Agora sempre visível
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <source src={rapunzelFooterVideo} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </motion.video>

      <motion.p
        className="footer-p"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}  // Agora sempre visível
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
         <ContagemRegressiva />
      </motion.p>
    </footer>
  );
}




