import "./BotaoCliqueAqui.css";

export default function BotaoCliqueAqui({ targetId, setScrollLocked }) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (setScrollLocked) setScrollLocked(false);
    }
  };

  return (
    <div className="clique-aqui-container" onClick={handleClick}>
      <span className="clique-aqui-texto">
        clique aqui
      </span>
    </div>
  );
}





