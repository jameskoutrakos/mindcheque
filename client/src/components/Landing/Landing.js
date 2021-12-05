import { Link } from "react-router-dom";
import "./Landing.scss";

import devicesPic from "../../assets/images/devices-with-bottom.png";

import smileBlack from "../../assets/icons/smile-black.svg";
import nextBlack from "../../assets/icons/next-black.svg";

function Landing() {
  return (
    <section className="landing">
      <article className="landing__container">
        <div className="landing__box landing__box--1">
          <div className="landing__title-wrapper landing__title-wrapper--underline-1">
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
            A website designed and curated with the user in mind, a tool for
            those who sometimes feel anxious, or want a way to track their
            day-to-day.
          </p>
          <p className="landing__box-body">
            MindCheque is a resource that can be used to deposit your thoughts
            and memories into your very own memory bank.
          </p>
        </div>
        <img
          className="landing__hero-img"
          src={devicesPic}
          alt="the memory overview page of the mindcheque website showin in an iMac, iPad Pro 11 inch, and iPhone 13 shell. To show off its flexible design."
        />
        <Link to="/profile" className="landing__box landing__box--2">
          <div className="landing__title-wrapper landing__title-wrapper--underline-2">
            <h2 className="landing__box-title">
              {" "}
              <span className="landing__box-title--bold">Sign Up</span> or{" "}
              <span className="landing__box-title--bold">Log In</span>
            </h2>
            <img
              className="landing__img landing__img--chevron"
              src={nextBlack}
              alt="the next icon"
            />
          </div>
          <p className="landing__box-body">
            Start now by creating an account! It's really easy to do too.
          </p>
          <p className="landing__box-body">
            Simply click on this box and you will be able to create a new
            account or log in to your existing account.
          </p>
        </Link>
      </article>
      <article className="landing__container landing__container--top-row">
        <div className="landing__box landing__box--top-row">
          <div className="landing__title-wrapper landing__title-wrapper--underline-3">
            <h2 className="landing__mini-box-title">Why MindCheque?</h2>
          </div>
          <p className="landing__mini-box-body">
            The name{" "}
            <span className="landing__mini-box-body--bold">MindCheque</span> is
            a play on words.{" "}
          </p>
          <p className="landing__mini-box-body">
            <span className="landing__mini-box-body--bold">Mind</span> being
            home to your memories, and{" "}
            <span className="landing__mini-box-body--bold">Cheque</span> to
            illustrate that it gives you the opportunity to 'check' yourself on
            the daily. Also, in making memory deposits like depositing a
            'cheque'.
          </p>
        </div>
        <div className="landing__box landing__box--top-row landing__box--top-row--middle">
          <div className="landing__title-wrapper landing__title-wrapper--underline-3">
            <h2 className="landing__mini-box-title">Invest in Yourself!</h2>
          </div>
          <p className="landing__mini-box-body">
            Deposit these memories like you’re depositing cheques. Document the
            good things that happen, every small win, and then return to these
            memories whenever you feel down or need to remind yourself that you
            can do it!
          </p>
        </div>
        <div className="landing__box landing__box--top-row ">
          <div className="landing__title-wrapper landing__title-wrapper--underline-3">
            <h2 className="landing__mini-box-title">Proven to Help!</h2>
          </div>
          <p className="landing__mini-box-body">
            {" "}
            Studies have shown the positive impact of documenting your thoughts.
          </p>
          <p className="landing__mini-box-body">
            {" "}
            Returning to the positive affirmations and proven progress that you
            have succeeded in previously, you will be instilled with the
            confidence to do it again and challenge you to keep improving
            yourself!
          </p>
        </div>
      </article>
    </section>
  );
}

export default Landing;
