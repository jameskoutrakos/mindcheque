import "./MemoryDetails.scss";

import DeleteMemory from "../DeleteMemory/DeleteMemory";

import { Component } from "react";
import { Link, Route } from "react-router-dom";

class MemoryDetails extends Component {
  componentDidMount() {
    console.log("MEMORY DETAILS MOUNTED");
    console.log(this.props);
    this.props.getCurrentMemory(
      this.props.match.params.userID,
      this.props.match.params.memoryID
    );
  }
  render() {
    const {
      memoryID,
      userID,
      title,
      description,
      dateCreated,
      dateLastUpdated,
      feeling,
      helpfulThought,
      relatedMoment,
    } = this.props.currentMemory;

    const dateOfMemory = this.props.currentMemory.dateOfMemory;

    return (
      <section className="memoryDetails">
        <article className="memoryDetails__container">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{dateOfMemory}</p>
          <p>{feeling}</p>
          <p>{helpfulThought}</p>
          <p>{relatedMoment}</p>
          <Link to={`/profile/${userID}/memories/${memoryID}/edit-memory`}>
            Edit Memory
          </Link>
          {/*<Link to={`/profile/${userID}/memories/${memoryID}/delete-memory`}>
            {" "}
            Delete Memory{" "}
    </Link>*/}
          <DeleteMemory
            userID={userID}
            memoryID={memoryID}
            title={title}
            deleteMemoryByUser={this.props.deleteMemoryByUser}
            history={this.props.history}
          />
        </article>
      </section>
    );
  }
}

export default MemoryDetails;
