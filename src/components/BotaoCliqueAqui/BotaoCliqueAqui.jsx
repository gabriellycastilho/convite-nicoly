// BotaoCliqueAqui.jsx
import "./BotaoCliqueAqui.css";

export default function BotaoCliqueAqui({ targetId, setScrollLocked, className = "" }) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (setScrollLocked) setScrollLocked(false);
    }
  };

  return (
    <div
      className={`clique-aqui-container ${className}`}
      onClick={handleClick}
    >
      <span className="clique-aqui-texto">
        clique aqui
      </span>
    </div>
  );
}






