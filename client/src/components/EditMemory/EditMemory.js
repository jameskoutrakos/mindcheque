import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import "./EditMemory.scss";

const host = "http://localhost:8080";

class EditMemory extends Component {
  state = {
    memoryID: "",
    userID: "",
    title: "",
    description: "",
    dateOfMemory: "",
    dateCreated: "",
    dateLastUpdated: "",
    feeling: "",
    helpfulThought: "",
    relatedMoment: "",
    errors: {},
    charLimit: 5000,
  };

  setUpdateDate = () => {
    const today = new Date();
    const updateDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return updateDate;
  };

  getMemoryToEdit = (userID, memoryID) => {
    axios
      .get(`${host}/profile/${userID}/memories/${memoryID}/edit-memory`)
      .then((response) => {
        const foundMemory = response.data[0];
        const {
          title,
          description,
          dateOfMemory,
          dateCreated,
          dateLastUpdated,
          feeling,
          helpfulThought,
          relatedMoment,
        } = foundMemory;
        this.setState({
          title: title,
          description: description,
          dateOfMemory: dateOfMemory.slice(0, 10),
          dateCreated: dateCreated,
          dateLastUpdated: dateLastUpdated,
          feeling: feeling,
          helpfulThought: helpfulThought,
          relatedMoment: relatedMoment,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    const { userID, memoryID } = this.props.match.params;
    this.getMemoryToEdit(userID, memoryID);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("handleChange", e.target.name);
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };

  handleSubmit = (e) => {
    const { userID, memoryID } = this.props.match.params;
    e.preventDefault();

    if (
      !this.state.title ||
      !this.state.description ||
      !this.state.dateOfMemory
    ) {
      Swal.fire({
        title: "Oops! A field is missing!",
        text: "Please check all fields for you save your changes.",
        icon: "error",
        confirmButtonColor: "#2a7d8c",
      });
    } else {
      Swal.fire({
        position: "top-end",
        title: "Your memory has been successfully updated!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      axios
        .put(`${host}/profile/${userID}/memories/${memoryID}/edit-memory`, {
          memoryID: memoryID,
          userID: userID,
          title: this.state.title,
          description: this.state.description,
          dateOfMemory: this.state.dateOfMemory,
          dateLastUpdated: this.setUpdateDate(),
          feeling: this.state.feeling,
          helpfulThought: this.state.helpfulThought,
          relatedMoment: this.state.relatedMoment,
        })
        .then((response) => {
          this.props.history.goBack();
        });
    }
  };

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
    } = this.state;

    return (
      <section className="edit-memory">
        <article className="edit-memory__container">
          <form>
            <div className="edit-memory__form">
              <div className="edit-memory__box edit-memory__box--description">
                <div className="edit-memory__box-header-wrapper">
                  <div className="edit-memory__text-wrapper edit-memory__text-wrapper--title">
                    <p className="edit-memory__input-label">Title</p>
                    <input
                      className="edit-memory__header edit-memory__input"
                      type="text"
                      name="title"
                      value={title}
                      onChange={(e) => this.handleChange(e)}
                      placeholder="Write a title for your memory here."
                    />
                  </div>

                  <div className="edit-memory__text-wrapper">
                    <p className="edit-memory__input-label">Date of Memory</p>
                    <input
                      className="edit-memory__date-text edit-memory__input"
                      type="date"
                      name="dateOfMemory"
                      value={dateOfMemory}
                      onChange={(e) => this.handleChange(e)}
                      placeholder="Enter the date of your memory (Ex. 2021-01-25)"
                    />
                  </div>
                </div>

                <p className="edit-memory__input-label">Description</p>
                <textarea
                  className="edit-memory__input"
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Write a description of your memory, how did you feel? What happened?"
                ></textarea>
                <p className="edit-memory__body edit-memory__body--counter">
                  {" "}
                  Characters typed: {this.state.description.length} / 5000
                </p>
              </div>

              <div className="edit-memory__box edit-memory__box--feeling">
                <p className="edit-memory__input-label">
                  How did this memory make you feel?
                </p>
                <p className="edit-memory__input-label-sub">
                  Select a feeling that best summarizes your feelings around
                  this memory from the list provided.
                </p>
                <select
                  className="edit-memory__input"
                  id="feeling"
                  name="feeling"
                  value={feeling}
                  onChange={(e) => this.handleChange(e)}
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

              <div className="edit-memory__box edit-memory__box--helpful">
                <p className="edit-memory__input-label">
                  Is this a helpful memory?
                </p>
                <p className="edit-memory__input-label-sub">
                  This section is to identify if this memory is one that brings
                  positive (Yes) feelings or negative (No) feelings.
                </p>
                <select
                  className="edit-memory__input"
                  id="helpfulThought"
                  name="helpfulThought"
                  value={helpfulThought}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div className="edit-memory__box edit-memory__box--related">
                <p className="edit-memory__input-label">
                  Related Moment (Optional)
                </p>
                <input
                  className="edit-memory__input"
                  type="text"
                  name="relatedMoment"
                  value={relatedMoment}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="What reminds you of this moment? A song? A place? A person? Feel free to leave this spot blank if it is not applicable to this memory."
                />
              </div>
            </div>

            <div className="edit-memory__form-button-container">
              <div
                onClick={this.handleCancel}
                className="edit-memory__box edit-memory__box--cancel"
              >
                <p className="edit-memory__call-to-action">Cancel Changes</p>
              </div>

              <div
                onClick={this.handleSubmit}
                className="edit-memory__box edit-memory__box--confirm"
              >
                <p className="edit-memory__call-to-action">Save Changes</p>
              </div>

              <div className="edit-memory__box edit-memory__box--update">
                <p className="edit-memory__subheader edit-memory__subheader--time-header">
                  Memory was created by you on:{" "}
                </p>
                <p className="edit-memory__time-text">
                  {dateCreated.slice(0, 10)}
                </p>
                <p className="edit-memory__subheader edit-memory__subheader--time-header">
                  Memory was last updated on:{" "}
                </p>
                <p className="edit-memory__time-text">
                  {dateLastUpdated.slice(0, 10)}
                </p>
              </div>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default EditMemory;
