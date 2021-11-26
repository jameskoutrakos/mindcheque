import { Component } from "react";
import { Link } from "react-router-dom";
import "./AddNewMemory.scss";

class AddNewMemory extends Component {
  addMemory = (e) => {
    e.preventDefault();
    let newMemory = {
      userID: this.props.match.params.userID,
      title: e.target.title.value,
      description: e.target.description.value,
      dateOfMemory: e.target.dateOfMemory.value,
      feeling: e.target.feeling.value,
      helpfulThought: e.target.helpfulThought.value,
      relatedMoment: e.target.relatedMoment.value,
    };

    this.props.addMemoryByUser(this.props.match.params.userID, newMemory);
    this.props.history.goBack();
  };

  render() {
    const userID = this.props.match.params.userID;

    return (
      <section className="addNewMemory">
        <article className="addNewMemory__container">
          <h1>AddNewMemory</h1>
          <form onSubmit={this.addMemory}>
            <div className="addNewMemory__form">
              <label className="addNewMemory__form-label">Title</label>
              <input
                className="addNewMemory__form-input"
                name="title"
                placeholder="Write a title for your memory here"
              />
              <label className="addNewMemory__form-label">Description</label>
              <input
                className="addNewMemory__form-input"
                name="description"
                placeholder="Write a description of your memory, how did you feel? What happened?"
              />
              <label className="addNewMemory__form-label">Date Of Memory</label>
              <input
                className="addNewMemory__form-input"
                name="dateOfMemory"
                placeholder="The date this memory occured (ex: 2012-02-12)"
              />
              <label className="addNewMemory__form-label">Feeling</label>
              <input
                className="addNewMemory__form-input"
                name="feeling"
                placeholder="How did this make memory make you feel? Good? Bad? Great? OK?"
              />
              <label className="addNewMemory__form-label">
                Helpful Thought?
              </label>
              <input
                className="addNewMemory__form-input"
                name="helpfulThought"
                placeholder="Is this a helpful thought? Will is it a positive or negative thought (1 or 0)?"
              />
              <label className="addNewMemory__form-label">Related Moment</label>
              <input
                className="addNewMemory__form-input"
                name="relatedMoment"
                placeholder="What reminds you of this moment? A song? A place? A person?"
              />
            </div>
            <div className="addNewMemory__form-button-container">
              <Link to={`/profile/${userID}/memories`}>
                <button>Cancel</button>
              </Link>
              <button>Add Memory</button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default AddNewMemory;
