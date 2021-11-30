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
          <h1>Let's make a new memory</h1>
          <form onSubmit={this.addMemory}>
            <div className="addNewMemory__form">
              <div className="addNewMemory__box addNewMemory__box--description">
                <div className="addNewMemory__box-header-wrapper">
                  <input
                    type="text"
                    className="addNewMemory__header"
                    name="title"
                    placeholder="Write a title for your memory here"
                  />

                  <div className="addNewMemory__date-wrapper">
                    <p className="addNewMemory__subheader">Date Of Memory</p>
                    <input
                      type="date"
                      className="addNewMemory__date-text"
                      name="dateOfMemory"
                      placeholder="The date this memory occured (ex: 2012-02-12)"
                    />
                  </div>
                </div>

                <p className="addNewMemory__subheader">Description</p>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Write a description of your memory, how did you feel? What happened?"
                ></textarea>
              </div>

              <div className="addNewMemory__box addNewMemory__box--feeling">
                <p className="addNewMemory__subheader">
                  How did this make memory make you feel?
                </p>
                <select id="feeling" name="feeling">
                  <option value="Proud">Proud</option>
                  <option value="Excited">Excited</option>
                  <option value="Happy">Happy</option>
                  <option value="Alright">Alright</option>
                  <option value="Anxious">Anxious</option>
                  <option value="Upset">Upset</option>
                </select>
              </div>

              <div className="addNewMemory__box addNewMemory__box--helpful">
                <p className="addNewMemory__subheader">
                  Is this a helpful thought? Will is it a positive or negative
                  thought (Yes or No)?
                </p>
                <select id="helpfulThought" name="helpfulThought">
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div className="addNewMemory__box addNewMemory__box--related">
                <p className="addNewMemory__subheader">Related Moment</p>
                <input
                  type="text"
                  name="relatedMoment"
                  placeholder="What reminds you of this moment? A song? A place? A person?"
                />
              </div>
            </div>
            <div className="addNewMemory__form-button-container">
              <Link
                to={`/profile/${userID}/`}
                className="addNewMemory__box addNewMemory__box--cancel"
              >
                <p>Cancel</p>
              </Link>
              <button className="addNewMemory__box addNewMemory__box--confirm">
                <p>Add Memory</p>
              </button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default AddNewMemory;
