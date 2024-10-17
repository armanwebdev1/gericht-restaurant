import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

export default function Newsletter() {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to our Newslatter</h1>
      </div>
    </div>
  );
}
