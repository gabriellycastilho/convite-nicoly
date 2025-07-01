import { useEffect, useState } from "react";
import "./ContagemRegressiva.css";

export default function ContagemRegressiva() {
  function getTimeRemaining() {
    const targetDate = new Date("2025-11-01T19:00:00");
    const now = new Date();
    const difference = targetDate - now;

    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.total <= 0) {
    return (
      <div className="countdown">
        <p>Chegou o grande dia! 🎉</p>
      </div>
    );
  }

  return (
    <div className="countdown">
      <p className="countdown-top-text">Faltam apenas ...</p>

      <div className="countdown-items">
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">dias</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.hours}</span>
          <span className="countdown-label">horas</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.minutes}</span>
          <span className="countdown-label">minutos</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.seconds}</span>
          <span className="countdown-label">segundos</span>
        </div>
      </div>

      <p className="countdown-bottom-text">... para o dia da festa.</p>
    </div>
  );
}

