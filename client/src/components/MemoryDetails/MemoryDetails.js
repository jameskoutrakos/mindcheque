import "./MemoryDetails.scss";

import DeleteMemory from "../DeleteMemory/DeleteMemory";

import { Component } from "react";
import { Link } from "react-router-dom";

class MemoryDetails extends Component {
  componentDidMount() {
    this.props.getCurrentMemory(
      this.props.match.params.userID,
      this.props.match.params.memoryID
    );
  }

  toggleRelatedClass = (isRelatedMoment) => {
    return isRelatedMoment
      ? "memory-details__box memory-details__box--related"
      : "memory-details__box memory-details__box--related memory-details__box--related--hidden";
  };

  render() {
    const { memoryID, userID, title, description, feeling, relatedMoment } =
      this.props.currentMemory;

    const dateOfMemory = this.props.currentMemory.dateOfMemory;
    const helpfulThought = this.props.currentMemory.helpfulThought;

    const helpfulText = () => {
      if (helpfulThought === 1) {
        return "Yes, this is a helpful memory for me.";
      } else {
        return "No, this memory brings back some uncomfortable thoughts.";
      }
    };
    return (
      <section className="memory-details">
        <article className="memory-details__container">
          <div className="memory-details__box memory-details__box--description">
            <div className="memory-details__box-header-wrapper">
              <h1 className="memory-details__header">{title}</h1>
              <div className="memory-details__date-wrapper">
                <p className="memory-details__subheader">Date of Memory</p>
                <p className="memory-details__date-text">
                  {dateOfMemory !== undefined && dateOfMemory.slice(0, 10)}
                </p>
              </div>
            </div>
            <p className="memory-details__subheader">Description</p>
            <p className="memory-details__body">{description}</p>
          </div>
          <div className="memory-details__box memory-details__box--feeling">
            <p className="memory-details__subheader">
              This memory makes me feel...
            </p>
            <p className="memory-details__body">{feeling}</p>
          </div>
          <div className="memory-details__box memory-details__box--helpful">
            <p className="memory-details__subheader">Helpful Memory?</p>
            <p className="memory-details__body">{helpfulText()}</p>
          </div>
          <div className={this.toggleRelatedClass(relatedMoment)}>
            <p className="memory-details__subheader">Related Thought</p>
            <p className="memory-details__body">{relatedMoment}</p>
          </div>
          <Link
            to={`/profile/${userID}/memories`}
            className="memory-details__box memory-details__box--goback"
          >
            <p className="memory-details__body--return">
              Return To Memory List
            </p>
          </Link>
          <Link
            to={`/profile/${userID}/memories/${memoryID}/edit-memory`}
            className="memory-details__box memory-details__box--edit"
          >
            <p>Edit Memory</p>
          </Link>
          <div className="memory-details__box memory-details__box--delete">
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
