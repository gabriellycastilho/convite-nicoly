import "./BotaoCliqueAqui.css";


export default function BotaoCliqueAqui({ targetId }) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="clique-aqui-container" onClick={handleClick}>
      <span className="clique-aqui-texto">
        clique aqui
      </span>
    </div>
  );
}




