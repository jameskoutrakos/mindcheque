import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
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
    alert("Account created successfully! Please log in to your account!");
  };

  logInUser = (e) => {
    e.preventDefault();

    let userCreds = {
      usernameLogIn: e.target.usernameLogIn.value,
      passwordLogIn: e.target.passwordLogIn.value,
    };

    axios
      .post(`${host}/profile/`, userCreds)
      .then((response) => {
        const foundUserID = response.data;
        alert("Log In Success, now redirecting...");
        this.props.history.push(`/profile/${foundUserID}`);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Username and/or password is incorrect, please review log-in credentials."
        );
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
          <h2>Returning User</h2>
          <form onSubmit={this.logInUser}>
            <div className="logIn__form">
              <p>Username</p>
              <input
                type="text"
                name="usernameLogIn"
                placeholder="Enter your username"
              />
              <p>Password</p>
              <input
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
          <h2>Create an Account</h2>
          <form onSubmit={this.signUpUser}>
            <div className="signUp__form">
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your email address"
              />
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your email address"
              />
              <p>Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <p>Username</p>
              <input
                type="text"
                name="username"
                placeholder="Enter a new user name"
              />
              <p>Password</p>
              <input
                type="password"
                name="password"
                placeholder="Enter a password"
              />
              <p>Confirm Password</p>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm the password"
              />
              <p>Date of Birth</p>
              <input type="date" name="dob" />
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
