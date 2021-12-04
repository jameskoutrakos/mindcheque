import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import "./LogInSignUp.scss";

const host = "http://localhost:8080";

class LogInSignUp extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  toggleSignUpForm = () => {
    const { validNewUser } = this.props;
    if (validNewUser === false) {
      return;
    } else {
      return "log-in-sign-up__container--hidden";
    }
  };

  signUpUser = (e) => {
    e.preventDefault();
    let newUser = {
      username: e.target.username.value,
      password: e.target.password.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      dateOfBirth: e.target.dob.value,
    };

    this.props.addNewUser(newUser);
  };

  logInUser = (e) => {
    e.preventDefault();

    let userCreds = {
      usernameLogIn: e.target.usernameLogIn.value,
      passwordLogIn: e.target.passwordLogIn.value,
    };

    axios
      .post(`${host}/profile/login`, userCreds)
      .then((response) => {
        const foundUserID = response.data;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log-in successful! Redirecting now...",
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          this.props.history.push(`/profile/${foundUserID}`);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Oops! Log-in failed.",
          text: "Please review your log-in credentials and try again.",
          icon: "error",
          confirmButtonColor: "#2a7d8c",
        });
      });
  };

  render() {
    return (
      <section className="log-in-sign-up">
        <article className="log-in-sign-up__primary-wrapper">
          <article className="log-in-sign-up__container">
            <h2 className="log-in-sign-up__title">Returning User</h2>
            <form onSubmit={this.logInUser}>
              <div className="log-in__form">
                <p className="log-in-sign-up__input-label">Username</p>
                <input
                  className="log-in-sign-up__input"
                  type="text"
                  name="usernameLogIn"
                  placeholder="Enter your username"
                />
                <p className="log-in-sign-up__input-label">Password</p>
                <input
                  className="log-in-sign-up__input"
                  type="password"
                  name="passwordLogIn"
                  placeholder="Enter your password"
                />
                <button className="log-in-sign-up__box log-in-sign-up__box--submit">
                  {" "}
                  Log In{" "}
                </button>
              </div>
            </form>
          </article>

          <article
            className={`log-in-sign-up__container log-in-sign-up__container--option ${this.toggleSignUpForm()}`}
          >
            <h2>OR</h2>
          </article>

          <article
            className={`log-in-sign-up__container ${this.toggleSignUpForm()}`}
          >
            <h2 className="log-in-sign-up__title">Create an Account</h2>
            <form onSubmit={this.signUpUser}>
              <div className="sign-up__form">
                <p className="log-in-sign-up__input-label">First Name</p>
                <input
                  className="log-in-sign-up__input"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                />
                <p className="log-in-sign-up__input-label">Last Name</p>
                <input
                  className="log-in-sign-up_input"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                />
                <p className="log-in-sign-up__input-label">Email</p>
                <input
                  className="log-in-sign-up__input"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
                <p className="log-in-sign-up__input-label">Username</p>
                <input
                  className="log-in-sign-up__input"
                  type="text"
                  name="username"
                  placeholder="Enter a new user name"
                />
                <p className="log-in-sign-up__input-label">Password</p>
                <input
                  className="log-in-sign-up__input"
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                />
                <p className="log-in-sign-up__input-label">Date of Birth</p>
                <input
                  className="log-in-sign-up__input"
                  type="date"
                  name="dob"
                />
                <button className="log-in-sign-up__box log-in-sign-up__box--submit">
                  Create Account
                </button>
              </div>
            </form>
          </article>
        </article>
      </section>
    );
  }
}

export default LogInSignUp;
