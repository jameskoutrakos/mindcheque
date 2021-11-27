import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <article className="header__container">
        <Link className="header__logo" to="/">
          <h1 className="header__logo">MindCheque</h1>
        </Link>
        <nav className="header__nav">
          <Link to="/" className="header__link">
            HOME
          </Link>
          <p className="header__link-divider"> | </p>
          <Link to="/login" className="header__link">
            LOG IN
          </Link>
        </nav>
      </article>
    </section>
  );
}

export default Header;
