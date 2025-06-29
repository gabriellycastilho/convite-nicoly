import "./Hero.css";
import luzesVideo from "../../assets/videos/rapunzelvideo.mp4"; // coloca seu vídeo na pasta assets/videos

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
  <p className="click-here"
    onClick={() => {
      document.getElementById('convite-texto').scrollIntoView({ behavior: 'smooth' });
    }}
    style={{ cursor: 'pointer', color: 'var(--dourado-claro)', textDecoration: 'underline', marginTop: '1rem' }}
  >
    Clique aqui
  </p>
</div>
    </section>
  );
}


