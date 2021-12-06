import "./NotFound.scss";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__box">
          <h1 className="not-found__title">Oh noes... 404 Error!</h1>
          <h1 className="not-found__subtitle">
            Looks like this page wasn't found :(
          </h1>
        </div>
        <Link to="/" className="not-found__box not-found__box--link">
          <h2 className="not-found__link">
            Go back to the{" "}
            <span className="not-found__link--underline">HOME</span> page
          </h2>
        </Link>
        <Link to="/profile" className="not-found__box not-found__box--link">
          <h2 className="not-found__link">
            Go back to the{" "}
            <span className="not-found__link--underline">ACCOUNT</span> page
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
