import "./Landing.scss";

function Landing() {
  return (
    <section className="landing">
      <article className="landing__container">
        <div className="landing__box landing__box--1">
          <h2>Create Your Own Memory Bank</h2>
        </div>
        <div className="landing__box landing__box--2">
          <h3>Create an Account or Log In</h3>
        </div>
        <div className="landing__box landing__box--3">
          <h3>Make New Memories</h3>
        </div>
        <div className="landing__box landing__box--4">
          <h3>Bank Your Memories For Later</h3>
        </div>
      </article>
    </section>
  );
}

export default Landing;
