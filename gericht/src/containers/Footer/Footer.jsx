import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
    </div>
  );
}
