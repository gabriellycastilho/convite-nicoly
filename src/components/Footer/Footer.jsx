import rapunzelFooterVideo from "../../assets/videos/rapunzelfootervideo.mov";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="convite-footer" className="footer">
      <video
        className="footer-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={rapunzelFooterVideo} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
      <p className="footer-p">Que essa noite seja repleta de sorrisos, memórias inesquecíveis e muita magia no ar. Te espero lá, pra juntos vivermos esse sonho encantado!</p>
    </footer>
  );
}

