import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import "./LogInSignUp.scss";

const host = "http://localhost:8080";

class LogInSignUp extends Component {
  componentDidMount() {
    console.log("LOG IN MOUNTED");
    this.props.getAllUsers();
  }

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
        // alert("Log In Success, now redirecting...");
        this.props.history.push(`/profile/${foundUserID}`);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Oops! Log-in failed.",
          text: "Please review your log-in credentials and try again.",
          icon: "error",
          confirmButtonColor: "#2a7d8c",
        });
        // alert(
        //   "Username and/or password is incorrect, please review log-in credentials."
        // );
      });
  };

  // FRONT END VERSION
  // logInUser = (e) => {
  //   e.preventDefault();
  //   const enteredUsername = e.target.usernameLogIn.value;
  //   const enteredPassword = e.target.passwordLogIn.value;

  //   this.props.allUsers.find((user) => {
  //     if (
  //       user.username === enteredUsername &&
  //       user.password === enteredPassword
  //     ) {
  //       alert("User logged in!");
  //       return this.props.history.push(`/profile/${user.userID}`);
  //     } else {
  //       // ASK ABOUT THIS IN OPEN STUDIO
  //       return console.log(
  //         "Profile not found, please check your login information again."
  //       );
  //     }
  //   });
  // };

  // Confirm Password Input
  // <p>Confirm Password</p>
  // <input
  //   type="password"
  //   name="confirmPassword"
  //   placeholder="Confirm the password"
  // />

  render() {
    return (
      <section className="logInSignUp">
        {/* <article className="logInSignUp__container">
          <h1>Testing out logins</h1>
          <Link to="/profile/1" className="logInSignUp__box">
            User 1
          </Link>
          <Link to="/profile/2" className="logInSignUp__box">
            User 2
          </Link>
          <Link to="/profile/3" className="logInSignUp__box">
            User 3
          </Link>
        </article> */}

        <article className="logInSignUp__container">
          <h2 className="logInSignUp__title">Returning User</h2>
          <form onSubmit={this.logInUser}>
            <div className="logIn__form">
              <p className="logInSignUp__input-label">Username</p>
              <input
                className="logInSignUp__input"
                type="text"
                name="usernameLogIn"
                placeholder="Enter your username"
              />
              <p className="logInSignUp__input-label">Password</p>
              <input
                className="logInSignUp__input"
                type="password"
                name="passwordLogIn"
                placeholder="Enter your password"
              />
              <button className="logInSignUp__box logInSignUp__box--submit">
                {" "}
                Log In{" "}
              </button>
            </div>
          </form>
        </article>

        <article className="logInSignUp__container logInSignUp__container--option">
          <h2>OR</h2>
        </article>

        <article className="logInSignUp__container">
          <h2 className="logInSignUp__title">Create an Account</h2>
          <form onSubmit={this.signUpUser}>
            <div className="signUp__form">
              <p className="logInSignUp__input-label">First Name</p>
              <input
                className="logInSignUp__input"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
              />
              <p className="logInSignUp__input-label">Last Name</p>
              <input
                className="logInSignUp__input"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
              />
              <p className="logInSignUp__input-label">Email</p>
              <input
                className="logInSignUp__input"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <p className="logInSignUp__input-label" p>
                Username
              </p>
              <input
                className="logInSignUp__input"
                type="text"
                name="username"
                placeholder="Enter a new user name"
              />
              <p className="logInSignUp__input-label">Password</p>
              <input
                className="logInSignUp__input"
                type="password"
                name="password"
                placeholder="Enter a password"
              />
              <p className="logInSignUp__input-label">Date of Birth</p>
              <input className="logInSignUp__input" type="date" name="dob" />
              <button className="logInSignUp__box logInSignUp__box--submit">
                Create Account
              </button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default LogInSignUp;
