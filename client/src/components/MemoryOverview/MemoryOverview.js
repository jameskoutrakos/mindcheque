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
        <section className="memoryOverview">
          <article className="memoryOverview__container">
            <div className="memoryOverview__box memoryOverview__box--header">
              <div className="memoryOverview__title-wrapper">
                <h1>
                  Welcome back, {firstName} {lastName}
                </h1>
                <div className="memoryOverview__img memoryOverview__img--smile"></div>
              </div>
            </div>

            <div className="memoryOverview__wrapper-main">
              <div className="memoryOverview__wrapper memoryOverview__wrapper--left">
                <Link
                  to={`/profile/${userID}/memories/${memoryID}`}
                  className="memoryOverview__box memoryOverview__box--recent memoryOverview__box--recent--memory"
                >
                  <div className="memoryOverview__title-wrapper">
                    <h2 className="memoryOverview__header">Recent Activity</h2>
                    <div className="memoryOverview__img memoryOverview__img--memory"></div>
                  </div>
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
                  <div className="memoryOverview__title-wrapper">
                    <h2 className="memoryOverview__header">
                      View All Memories
                    </h2>
                    <div className="memoryOverview__img memoryOverview__img--view"></div>
                  </div>
                </Link>
              </div>

              <div className="memoryOverview__wrapper memoryOverview__wrapper--right">
                <Link
                  to={`/profile/${userID}/memories/add-memory`}
                  className="memoryOverview__box memoryOverview__box--add"
                >
                  <div className="memoryOverview__title-wrapper">
                    <h2 className="memoryOverview__header">Add New Memory</h2>
                    <div className="memoryOverview__img memoryOverview__img--add"></div>
                  </div>
                </Link>
                <div className="memoryOverview__box memoryOverview__box--countdown">
                  <h2 className="memoryOverview__header">Countdown</h2>
                  <h1 className="memoryOverview__days">
                    {daysUntilBirthday && daysUntilBirthday[0]} days,{" "}
                    {daysUntilBirthday && daysUntilBirthday[1]} hours,{" "}
                    {daysUntilBirthday && daysUntilBirthday[2]} minutes
                  </h1>
                  <p className="memoryOverview__body">
                    A friendly reminder, your birthday is coming up soon!
                  </p>
                </div>
                <Link
                  to={`/profile`}
                  className="memoryOverview__box memoryOverview__box--logout"
                >
                  <div className="memoryOverview__title-wrapper">
                    <h2 className="memoryOverview__header">Log Out</h2>
                    <div className="memoryOverview__img memoryOverview__img--logout"></div>
                  </div>
                </Link>
              </div>
            </div>
          </article>
        </section>
      );
    } else {
      return (
        <section className="memoryOverview">
          <article className="memoryOverview__container">
            <div className="memoryOverview__box memoryOverview__box--header">
              <div className="memoryOverview__title-wrapper">
                <h1>
                  Welcome, {firstName} {lastName}
                </h1>
                <div className="memoryOverview__img memoryOverview__img--smile"></div>
              </div>
            </div>

            <div className="memoryOverview__wrapper-main">
              <div className="memoryOverview__wrapper memoryOverview__wrapper--left">
                <div className="memoryOverview__box memoryOverview__box--recent">
                  <div className="memoryOverview__title-wrapper">
                    <h2 className="memoryOverview__header">
                      Start making memories!
                    </h2>
                    <div className="memoryOverview__img memoryOverview__img--memory-no-hover"></div>
                  </div>
                  <h3 className="memoryOverview__subheader">
                    Your most recently deposited memory will display here.
                  </h3>
                  <p className="memoryOverview__body">
                    Click on{" "}
                    <Link
                      to={`/profile/${userID}/memories/add-memory`}
                      className="memoryOverview__body--link"
                    >
                      Add New Memory
                    </Link>{" "}
                    to make a deposit in your memory bank.
                  </p>
                </div>

                <Link
                  to={`/profile/${userID}/memories`}
                  className="memoryOverview__box memoryOverview__box--view"
                >
                  <div className="memoryOverview__title-wrapper">
                    <h2 className="memoryOverview__header">
                      View All Memories
                    </h2>
                    <div className="memoryOverview__img memoryOverview__img--view"></div>
                  </div>
                </Link>
              </div>

              <div className="memoryOverview__wrapper memoryOverview__wrapper--right">
                <Link
                  to={`/profile/${userID}/memories/add-memory`}
                  className="memoryOverview__box memoryOverview__box--add"
                >
                  <div className="memoryOverview__title-wrapper">
                    <h2 className="memoryOverview__header">Add New Memory</h2>
                    <div className="memoryOverview__img memoryOverview__img--add"></div>
                  </div>
                </Link>
                <div className="memoryOverview__box memoryOverview__box--countdown">
                  <h2 className="memoryOverview__header">Countdown</h2>
                  <h1 className="memoryOverview__days">
                    {daysUntilBirthday && daysUntilBirthday[0]} days,{" "}
                    {daysUntilBirthday && daysUntilBirthday[1]} hours,{" "}
                    {daysUntilBirthday && daysUntilBirthday[2]} minutes
                  </h1>
                  <p className="memoryOverview__body">
                    A friendly reminder, your birthday is coming up soon!
                  </p>
                </div>
                <Link
                  to={`/profile`}
                  className="memoryOverview__box memoryOverview__box--logout"
                >
                  <div className="memoryOverview__title-wrapper">
                    <h2 className="memoryOverview__header">Log Out</h2>
                    <div className="memoryOverview__img memoryOverview__img--logout"></div>
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
