import "./MemoryOverview.scss";

import { Component } from "react";
import { Link } from "react-router-dom";

class MemoryOverview extends Component {
  componentDidMount() {
    const { getSingleUser, getMostRecentMemory } = this.props;
    const { userID } = this.props.match.params;

    getSingleUser(userID);
    if (this.props.mostRecentMemory === []) {
      console.log("No memories found!");
    } else {
      getMostRecentMemory(userID);
    }
  }

  birthdayCountdown = () => {
    if (this.props.activeUser.dateOfBirth !== undefined) {
      const birthDate = this.props.activeUser.dateOfBirth.slice(5);
      const getNextYear = new Date();
      const nextYear = getNextYear.getFullYear() + 1;
      const nextBday = nextYear + "-" + birthDate;
      const nextBdayConverted = new Date(nextBday).getTime();

      const today = new Date().getTime();
      const daysLeft = nextBdayConverted - today;
      const days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60));

      return [days, hours, minutes];
    }
  };

  render() {
    const { firstName, lastName, userID } = this.props.activeUser;

    const daysUntilBirthday = this.birthdayCountdown();

    if (this.props.mostRecentMemory && this.props.mostRecentMemory !== []) {
      const { memoryID, title, feeling, dateCreated } =
        this.props.mostRecentMemory;

      return (
        <section className="memory-overview">
          <article className="memory-overview__container">
            <div className="memory-overview__box memory-overview__box--header">
              <div className="memory-overview__title-wrapper">
                <h1 className="memory-overview__greeting">
                  Welcome back, {firstName} {lastName}
                </h1>
                <div className="memory-overview__img memory-overview__img--smile"></div>
              </div>
            </div>
            <div className="memory-overview__wrapper-main">
              <div className="memory-overview__wrapper memory-overview__wrapper--left">
                <Link
                  to={`/profile/${userID}/memories/${memoryID}`}
                  className="memory-overview__box memory-overview__box--recent memory-overview__box--recent--memory"
                >
                  <div className="memory-overview__title-wrapper">
                    <h2 className="memory-overview__header">Recent Activity</h2>
                    <div className="memory-overview__img memory-overview__img--memory"></div>
                  </div>
                  <h3 className="memory-overview__subheader">{title}</h3>
                  <p className="memory-overview__body">
                    You created this memory on:{" "}
                    {dateCreated !== undefined && dateCreated.slice(0, 10)}
                  </p>
                  <p className="memory-overview__body">
                    You mentioned that this memory made you feel:{" "}
                    <span className="memory-overview__body--bold">
                      {" "}
                      {feeling}{" "}
                    </span>
                  </p>
                  <p className="memory-overview__body">
                    Click here to view and/or edit your memory!
                  </p>
                </Link>
                <Link
                  to={`/profile/${userID}/memories`}
                  className="memory-overview__box memory-overview__box--view"
                >
                  <div className="memory-overview__title-wrapper">
                    <h2 className="memory-overview__header">
                      View All Memories
                    </h2>
                    <div className="memory-overview__img memory-overview__img--view"></div>
                  </div>
                </Link>
              </div>
              <div className="memory-overview__wrapper memory-overview__wrapper--right">
                <Link
                  to={`/profile/${userID}/memories/add-memory`}
                  className="memory-overview__box memory-overview__box--add"
                >
                  <div className="memory-overview__title-wrapper">
                    <h2 className="memory-overview__header">Add New Memory</h2>
                    <div className="memory-overview__img memory-overview__img--add"></div>
                  </div>
                </Link>
                <div className="memory-overview__box memory-overview__box--countdown">
                  <h2 className="memory-overview__header">Countdown</h2>
                  <h1 className="memory-overview__days">
                    {daysUntilBirthday && daysUntilBirthday[0]} days,{" "}
                    {daysUntilBirthday && daysUntilBirthday[1]} hours,{" "}
                    {daysUntilBirthday && daysUntilBirthday[2]} minutes
                  </h1>
                  <p className="memory-overview__body">
                    A friendly reminder, your birthday is coming up soon!
                  </p>
                </div>
                <Link
                  to={`/profile`}
                  className="memory-overview__box memory-overview__box--logout"
                >
                  <div className="memory-overview__title-wrapper">
                    <h2 className="memory-overview__header">Log Out</h2>
                    <div className="memory-overview__img memory-overview__img--logout"></div>
                  </div>
                </Link>
              </div>
            </div>
          </article>
        </section>
      );
    } else {
      return (
        <section className="memory-overview">
          <article className="memory-overview__container">
            <div className="memory-overview__box memory-overview__box--header">
              <div className="memory-overview__title-wrapper">
                <h1>
                  Welcome, {firstName} {lastName}
                </h1>
                <div className="memory-overview__img memory-overview__img--smile"></div>
              </div>
            </div>
            <div className="memory-overview__wrapper-main">
              <div className="memory-overview__wrapper memory-overview__wrapper--left">
                <div className="memory-overview__box memory-overview__box--recent">
                  <div className="memory-overview__title-wrapper">
                    <h2 className="memory-overview__header">
                      Start making memories!
                    </h2>
                    <div className="memory-overview__img memory-overview__img--memory-no-hover"></div>
                  </div>
                  <h3 className="memory-overview__subheader">
                    Your most recently deposited memory will display here.
                  </h3>
                  <p className="memory-overview__body">
                    Click on{" "}
                    <Link
                      to={`/profile/${userID}/memories/add-memory`}
                      className="memory-overview__body--link"
                    >
                      Add New Memory
                    </Link>{" "}
                    to make a deposit in your memory bank.
                  </p>
                </div>
                <Link
                  to={`/profile/${userID}/memories`}
                  className="memory-overview__box memory-overview__box--view"
                >
                  <div className="memory-overview__title-wrapper">
                    <h2 className="memory-overview__header">
                      View All Memories
                    </h2>
                    <div className="memory-overview__img memory-overview__img--view"></div>
                  </div>
                </Link>
              </div>
              <div className="memory-overview__wrapper memory-overview__wrapper--right">
                <Link
                  to={`/profile/${userID}/memories/add-memory`}
                  className="memory-overview__box memory-overview__box--add"
                >
                  <div className="memory-overview__title-wrapper">
                    <h2 className="memory-overview__header">Add New Memory</h2>
                    <div className="memory-overview__img memory-overview__img--add"></div>
                  </div>
                </Link>
                <div className="memory-overview__box memory-overview__box--countdown">
                  <h2 className="memory-overview__header">Countdown</h2>
                  <h1 className="memory-overview__days">
                    {daysUntilBirthday && daysUntilBirthday[0]} days,{" "}
                    {daysUntilBirthday && daysUntilBirthday[1]} hours,{" "}
                    {daysUntilBirthday && daysUntilBirthday[2]} minutes
                  </h1>
                  <p className="memory-overview__body">
                    A friendly reminder, your birthday is coming up soon!
                  </p>
                </div>
                <Link
                  to={`/profile`}
                  className="memory-overview__box memory-overview__box--logout"
                >
                  <div className="memory-overview__title-wrapper">
                    <h2 className="memory-overview__header">Log Out</h2>
                    <div className="memory-overview__img memory-overview__img--logout"></div>
                  </div>
                </Link>
              </div>
            </div>
          </article>
        </section>
      );
    }
  }
}

export default MemoryOverview;
