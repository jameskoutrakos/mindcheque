import { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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

    if (
      !e.target.title.value ||
      !e.target.description.value ||
      !e.target.dateOfMemory.value
    ) {
      Swal.fire({
        title: "Oops! A field is missing!",
        text: "Please check all fields for your new memory before submitting!",
        icon: "error",
        confirmButtonColor: "#2a7d8c",
      });
    } else {
      Swal.fire({
        position: "top-end",
        title: "Your memory has been successfully added!",
        text: "Redirecting you to the overview page.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      this.props.addMemoryByUser(this.props.match.params.userID, newMemory);
      this.props.history.goBack();
    }
  };

  render() {
    const userID = this.props.match.params.userID;

    return (
      <section className="add-memory">
        <article className="add-memory__container">
          <h1>Let's make a new memory!</h1>
          <form onSubmit={this.addMemory}>
            <div className="add-memory__form">
              <div className="add-memory__box add-memory__box--description">
                <div className="add-memory__box-header-wrapper">
                  <div className="add-memory__text-wrapper add-memory__text-wrapper--title">
                    <p className="add-memory__input-label">Title</p>
                    <input
                      type="text"
                      className="add-memory__header add-memory__input"
                      name="title"
                      placeholder="Write a title for your memory here."
                    />
                  </div>
                  <div className="add-memory__text-wrapper">
                    <p className="add-memory__input-label">Date of Memory</p>
                    <input
                      type="date"
                      className="add-memory__date-text add-memory__input"
                      name="dateOfMemory"
                      placeholder="The date this memory occured (ex: 2012-02-12)"
                    />
                  </div>
                </div>
                <p className="add-memory__input-label">Description</p>
                <textarea
                  className="add-memory__input"
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleOnChange}
                  placeholder="Write a description of your memory, how did you feel? What happened?"
                ></textarea>
                <p className="add-memory__body add-memory__body--counter">
                  {" "}
                  Characters typed: {this.state.description.length} / 5000
                </p>
              </div>
              <div className="add-memory__box add-memory__box--feeling">
                <p className="add-memory__input-label">
                  How did this memory make you feel?
                </p>
                <p className="add-memory__input-label-sub">
                  Select a feeling that best summarizes your feelings around
                  this memory from the list provided.
                </p>
                <select
                  className="add-memory__input"
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
                  <option value="Sad">Sad</option>
                  <option value="Depressed">Depressed</option>
                </select>
              </div>
              <div className="add-memory__box add-memory__box--helpful">
                <p className="add-memory__input-label">
                  Is this a helpful memory?
                </p>
                <p className="add-memory__input-label-sub">
                  This section is to identify if this memory is one that brings
                  positive (Yes) feelings or negative (No) feelings.
                </p>
                <select
                  className="add-memory__input"
                  id="helpfulThought"
                  name="helpfulThought"
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className="add-memory__box add-memory__box--related">
                <p className="add-memory__input-label">
                  Related Moment (Optional)
                </p>
                <input
                  className="add-memory__input"
                  type="text"
                  name="relatedMoment"
                  placeholder="What reminds you of this moment? A song? A place? A person? Feel free to leave this spot blank if it is not applicable to this memory."
                />
              </div>
            </div>
            <div className="add-memory__form-button-container">
              <Link
                to={`/profile/${userID}/`}
                className="add-memory__box add-memory__box--cancel"
              >
                <p className="add-memory__body">Cancel</p>
              </Link>
              <button className="add-memory__box add-memory__box--confirm">
                <p className="add-memory__body">Add Memory</p>
              </button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default AddNewMemory;
