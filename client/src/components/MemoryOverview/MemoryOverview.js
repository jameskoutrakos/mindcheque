import "./MemoryOverview.scss";

import { Component } from "react";
import { Link } from "react-router-dom";

class MemoryOverview extends Component {
  componentDidMount() {
    console.log("MEMORY OVERVIEW MOUNTED");
    const { getSingleUser, getMostRecentMemory } = this.props;
    const { userID } = this.props.match.params;

    getSingleUser(userID);
    getMostRecentMemory(userID);
  }

  render() {
    const { firstName, lastName, userID } = this.props.activeUser;
    const { memoryID, title, feeling, dateCreated } =
      this.props.mostRecentMemory;

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
              <Link
                to={`/profile/${userID}/memories/${memoryID}`}
                className="memoryOverview__box memoryOverview__box--recent"
              >
                <h2 className="memoryOverview__header">Recent Activity</h2>
                <h3 className="memoryOverview__subheader">{title}</h3>
                <p className="memoryOverview__body">
                  You created this memory on:{" "}
                  {dateCreated !== undefined && dateCreated.slice(0, 10)}
                </p>
                <p className="memoryOverview__body">
                  You mentioned that this memory made you feel:{" "}
                  <span className="memoryOverview__body--bold">
                    {" "}
                    {feeling}{" "}
                  </span>
                </p>
                <p className="memoryOverview__body">
                  Click here to view and/or edit your memory!
                </p>
              </Link>
              <Link
                to={`/profile/${userID}/memories`}
                className="memoryOverview__box memoryOverview__box--view"
              >
                <h2 className="memoryOverview__header">View All Memories</h2>
              </Link>
            </div>

            <div className="memoryOverview__wrapper memoryOverview__wrapper--right">
              <Link
                to={`/profile/${userID}/memories/add-memory`}
                className="memoryOverview__box memoryOverview__box--add"
              >
                <h2 className="memoryOverview__header">Add New Memory</h2>
              </Link>
              <div className="memoryOverview__box"></div>
              <Link
                to={`/profile`}
                className="memoryOverview__box memoryOverview__box--logout"
              >
                <h2 className="memoryOverview__header">LOG OUT</h2>
              </Link>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default MemoryOverview;
