import "./MemoryOverview.scss";

import { Component } from "react";
import { Link } from "react-router-dom";

class MemoryOverview extends Component {
  componentDidMount() {
    console.log("MEMORY OVERVIEW MOUNTED");
    const { getSingleUser } = this.props;

    getSingleUser(this.props.match.params.userID);
  }

  render() {
    const { firstName, lastName, userID } = this.props.activeUser;

    return (
      <section className="memoryOverview">
        <article className="memoryOverview__container">
          <div className="memoryOverview__box memoryOverview__box--header">
            <h1>
              Welcome Back, {firstName} {lastName}
            </h1>
          </div>

          <div className="memoryOverview__wrapper-main">
            <div className="memoryOverview__wrapper memoryOverview__wrapper--left">
              <div className="memoryOverview__box memoryOverview__box--dashboard"></div>
              <Link
                to={`/profile/${userID}/memories`}
                className="memoryOverview__box memoryOverview__box--view"
              >
                <h2>View All Memories</h2>
              </Link>
            </div>

            <div className="memoryOverview__wrapper memoryOverview__wrapper--right">
              <Link
                to={`/profile/${userID}/memories/add-memory`}
                className="memoryOverview__box memoryOverview__box--add"
              >
                <h2>Add New Memory</h2>
              </Link>
              <div className="memoryOverview__box"></div>
              <Link
                to={`/profile`}
                className="memoryOverview__box memoryOverview__box--logout"
              >
                <h2>LOG OUT</h2>
              </Link>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default MemoryOverview;
