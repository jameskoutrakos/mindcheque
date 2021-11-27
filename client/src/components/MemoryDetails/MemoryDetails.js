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
          <div className="memoryDetails__box memoryDetails__box--description">
            <div className="memoryDetails__box-header-wrapper">
              <h1 className="memoryDetails__header">{title}</h1>
              <div className="memoryDetails__date-wrapper">
                <p className="memoryDetails__subheader">Date of Memory</p>
                <p className="memoryDetails__date-text">{dateOfMemory}</p>
              </div>
            </div>
            <p className="memoryDetails__subheader">Description</p>
            <p className="memoryDetails__body">{description}</p>
          </div>
          <div className="memoryDetails__box memoryDetails__box--feeling">
            <p className="memoryDetails__subheader">
              This memory makes me feel...
            </p>
            <p className="memoryDetails__body">{feeling}</p>
          </div>
          <div className="memoryDetails__box memoryDetails__box--helpful">
            <p className="memoryDetails__subheader">Helpful Thought?</p>
            <p className="memoryDetails__body">{helpfulThought}</p>
          </div>
          <div className="memoryDetails__box memoryDetails__box--related">
            <p className="memoryDetails__subheader">Related Thought</p>
            <p className="memoryDetails__body">{relatedMoment}</p>
          </div>
          <Link
            to={`/profile/${userID}/memories`}
            className="memoryDetails__box memoryDetails__box--goback"
          >
            <p>GO BACK</p>
          </Link>
          <Link
            to={`/profile/${userID}/memories/${memoryID}/edit-memory`}
            className="memoryDetails__box memoryDetails__box--edit"
          >
            <p>Edit Memory</p>
          </Link>
          <div className="memoryDetails__box memoryDetails__box--delete">
            <DeleteMemory
              userID={userID}
              memoryID={memoryID}
              title={title}
              deleteMemoryByUser={this.props.deleteMemoryByUser}
              history={this.props.history}
            />
          </div>
        </article>
      </section>
    );
  }
}

export default MemoryDetails;
