import "./MemoryOverview.scss";

import { Component } from "react";
import { Link } from "react-router-dom";

class MemoryOverview extends Component {
  componentDidMount() {
    console.log("MEMORY OVERVIEW MOUNTED");
    this.props.getSingleUser(this.props.match.params.userID);
  }

  render() {
    const { firstName, lastName, userID } = this.props.activeUser;

    return (
      <section className="memoryOverview">
        <article className="memoryOverview__container">
          <h1>
            {firstName} {lastName}
          </h1>
          <Link to={`/profile/${userID}/memories`}>Memory List</Link>
        </article>
      </section>
    );
  }
}

export default MemoryOverview;
