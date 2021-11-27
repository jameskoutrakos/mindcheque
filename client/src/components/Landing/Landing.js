import { Link } from "react-router-dom";
import "./Landing.scss";

function Landing() {
  return (
    <section className="landing">
      <article className="landing__container">
        <div className="landing__box landing__box--1">
          <h2 className="landing__box-1-title">Create Your Own</h2>
          <h2 className="landing__box-1-title landing__box-1-title--bold">
            Memory Bank
          </h2>
        </div>
        <Link to="/login" className="landing__box landing__box--2">
          <h3 className="landing__box-2-title">Create an Account or Log In</h3>
        </Link>
        <div className="landing__box landing__box--3">
          <h3 className="landing__box-3-title">Make New Memories</h3>
        </div>
        <div className="landing__box landing__box--4">
          <h3 className="landing__box-4-title">Bank Your Memories For Later</h3>
        </div>
      </article>
    </section>
  );
}

export default Landing;
