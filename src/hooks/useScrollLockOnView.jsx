import { useEffect } from "react";

export default function useScrollLock(lock) {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Limpa quando o componente desmonta pra não ficar bugado
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lock]);
}


