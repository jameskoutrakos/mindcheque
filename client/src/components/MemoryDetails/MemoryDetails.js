import "./MemoryDetails.scss";

import { Component } from "react";

class MemoryDetails extends Component {
  componentDidMount() {
    console.log("MEMORY DETAILS MOUNTED");
    this.props.getCurrentMemory(
      this.props.match.params.userID,
      this.props.match.params.memoryID
    );
  }
  render() {
    const {
      title,
      description,
      dateOfMemory,
      dateCreated,
      dateLastUpdated,
      feeling,
      helpfulThought,
      relatedMoment,
    } = this.props.currentMemory;

    return (
      <section className="memoryDetails">
        <article className="memoryDetails__container">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{dateOfMemory}</p>
          <p>{dateCreated}</p>
          <p>{dateLastUpdated}</p>
          <p>{feeling}</p>
          <p>{helpfulThought}</p>
          <p>{relatedMoment}</p>
        </article>
      </section>
    );
  }
}

export default MemoryDetails;
