import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

export default function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel commodi
          nihil, magnam magni ex libero quae eius tenetur facilis. Debitis.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header" />
      </div>
    </div>
  );
}
