import { Link } from "react-router-dom";
import "./LogInSignUp.scss";

function LogInSignUp() {
  return (
    <section className="logInSignUp">
      <article className="logInSignUp__container">
        <h1>LogIn / SignUp</h1>
        <Link to="/profile/1">User 1</Link>
        <Link to="/profile/2">User 2</Link>
        <Link to="/profile/3">User 3</Link>
      </article>
    </section>
  );
}

export default LogInSignUp;
