import { Link } from "react-router-dom";
import "./Landing.scss";

import smileBlack from "../../assets/icons/smile-black.svg";
import memoryBlack from "../../assets/icons/memory-black.svg";
import nextBlack from "../../assets/icons/next-black.svg";

function Landing() {
  return (
    <section className="landing">
      <article className="landing__container">
        <div className="landing__box landing__box--1">
          <div className="landing__title-wrapper landing__box-title--underline-1">
            <h2 className="landing__box-title">
              Welcome to{" "}
              <span className="landing__box-title--bold">MindCheque</span>
            </h2>
            <img
              className="landing__img"
              src={smileBlack}
              alt="a smiley face icon"
            />
          </div>

          <p className="landing__box-body">
            Home to your very own memory bank, one that can store your thoughts
            and memories for you to look back on for days, months, and years to
            come!
          </p>
        </div>

        <div className="landing__box landing__box--2">
          <div className="landing__title-wrapper landing__box-title--underline-2">
            <h2 className="landing__box-title">Invest in yourself</h2>
            <img
              className="landing__img"
              src={memoryBlack}
              alt="a memory icon"
            />
          </div>
          <p className="landing__box-body">
            by banking these memories like you’re banking cheques. Document the
            good things that happen, every small win, and then return to these
            memories whenever you feel down or need to remind yourself that you
            can do it!
          </p>
        </div>

        <Link to="/profile" className="landing__box landing__box--3">
          <div className="landing__title-wrapper landing__box-title--underline-3">
            <h2 className="landing__box-title">Create an Account or Log In</h2>
            <img
              className="landing__img landing__img--chevron"
              src={nextBlack}
              alt="the next icon"
            />
          </div>
          <p className="landing__box-body">
            by banking these memories like you’re banking cheques. Document the
            good things that happen, every small win, and then return to these
            memories whenever you feel down or need to remind yourself that you
            can do it!
          </p>
        </Link>
      </article>
    </section>
  );
}

export default Landing;
