import "./Header.scss";
import { Link } from "react-router-dom";

import whiteLogoRow from "../../assets/images/logo-white-row.png";

function Header() {
  return (
    <section className="header">
      <article className="header__container">
        <Link className="header__logo-wrapper" to="/">
          <img
            className="header__logo"
            src={whiteLogoRow}
            alt="main logo for MindCheque, a checkmark is used as eyebrows upon a happy face"
          />
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
