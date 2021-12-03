import { Component } from "react";
import { Link } from "react-router-dom";
import "./AddNewMemory.scss";

class AddNewMemory extends Component {
  state = {
    description: "",
    charLimit: 5000,
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
          <h1>Let's make a new memory!</h1>
          <form onSubmit={this.addMemory}>
            <div className="addNewMemory__form">
              <div className="addNewMemory__box addNewMemory__box--description">
                <div className="addNewMemory__box-header-wrapper">
                  <div className="addNewMemory__text-wrapper addNewMemory__text-wrapper--title">
                    <p className="addNewMemory__input-label">Title</p>
                    <input
                      type="text"
                      className="addNewMemory__header addNewMemory__input"
                      name="title"
                      placeholder="Write a title for your memory here."
                    />
                  </div>

                  <div className="addNewMemory__text-wrapper">
                    <p className="addNewMemory__input-label">Date Of Memory</p>
                    <input
                      type="date"
                      className="addNewMemory__date-text addNewMemory__input"
                      name="dateOfMemory"
                      placeholder="The date this memory occured (ex: 2012-02-12)"
                    />
                  </div>
                </div>

                <p className="addNewMemory__input-label">Description</p>
                <textarea
                  className="addNewMemory__input"
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleOnChange}
                  placeholder="Write a description of your memory, how did you feel? What happened?"
                ></textarea>
                <p className="addNewMemory__body addNewMemory__body--counter">
                  {" "}
                  Remaining Characters: {this.state.description.length} / 5000
                </p>
              </div>

              <div className="addNewMemory__box addNewMemory__box--feeling">
                <p className="addNewMemory__input-label">
                  How did this make memory make you feel?
                </p>
                <p className="addNewMemory__input-label">
                  Select a feeling that best summarizes your feelings around
                  this memory from the list provided.
                </p>
                <select
                  className="addNewMemory__input"
                  id="feeling"
                  name="feeling"
                >
                  <option value="Proud">Proud</option>
                  <option value="Excited">Excited</option>
                  <option value="Happy">Happy</option>
                  <option value="Alright">Alright</option>
                  <option value="OK">OK</option>
                  <option value="Anxious">Anxious</option>
                  <option value="Upset">Upset</option>
                </select>
              </div>

              <div className="addNewMemory__box addNewMemory__box--helpful">
                <p className="addNewMemory__input-label">
                  Is this a helpful memory?
                </p>
                <p className="addNewMemory__input-label">
                  This section is to identify if this memory is one that brings
                  positive (Yes) feelings or negative (No) feelings.
                </p>
                <select
                  className="addNewMemory__input"
                  id="helpfulThought"
                  name="helpfulThought"
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div className="addNewMemory__box addNewMemory__box--related">
                <p className="addNewMemory__input-label">Related Moment</p>
                <input
                  className="addNewMemory__input"
                  type="text"
                  name="relatedMoment"
                  placeholder="What reminds you of this moment? A song? A place? A person? Feel free to leave this spot blank if it is not applicable to this memory."
                />
              </div>
            </div>
            <div className="addNewMemory__form-button-container">
              <Link
                to={`/profile/${userID}/`}
                className="addNewMemory__box addNewMemory__box--cancel"
              >
                <p className="addNewMemory__body">Cancel</p>
              </Link>
              <button className="addNewMemory__box addNewMemory__box--confirm">
                <p className="addNewMemory__body">Add Memory</p>
              </button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default AddNewMemory;
