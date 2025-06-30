import Rapunzel from "../../assets/images/rapunzelfooter.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer-h1">Te vejo lá!</h1>
       <img className="Rapunzel" src={Rapunzel} alt="Rapunzel" />
    </footer>
  );
}
