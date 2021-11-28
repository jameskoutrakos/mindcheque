import { Link } from "react-router-dom";
import "./Landing.scss";

function Landing() {
  return (
    <section className="landing">
      <article className="landing__container">
        <div className="landing__box landing__box--1">
          <h2 className="landing__box-title landing__box-title--underline-1">
            Welcome to{" "}
            <span className="landing__box-title--bold">MindCheque</span>
          </h2>
          <p className="landing__box-body">
            Home to your very own memory bank, one that can store your thoughts
            and memories for you to look back on for days, months, and years to
            come!
          </p>
        </div>

        <div className="landing__box landing__box--2">
          <h2 className="landing__box-title landing__box-title--underline-2">
            Invest in yourself
          </h2>
          <p className="landing__box-body">
            by banking these memories like you’re banking cheques. Document the
            good things that happen, every small win, and then return to these
            memories whenever you feel down or need to remind yourself that you
            can do it!
          </p>
        </div>

        <Link to="/login" className="landing__box landing__box--3">
          <h2 className="landing__box-title landing__box-title--underline-3">
            Create an Account or Log In
          </h2>
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
