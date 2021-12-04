import axios from "axios";
import { Component } from "react";
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
      <section className="editMemory">
        <article className="editMemory__container">
          <form>
            <div className="editMemory__form">
              <div className="editMemory__box editMemory__box--description">
                <div className="editMemory__box-header-wrapper">
                  <div className="editMemory__text-wrapper editMemory__text-wrapper--title">
                    <p className="editMemory__input-label">Title</p>
                    <input
                      className="editMemory__header editMemory__input"
                      type="text"
                      name="title"
                      value={title}
                      onChange={(e) => this.handleChange(e)}
                      placeholder="Write a title for your memory here."
                    />
                  </div>

                  <div className="editMemory__text-wrapper">
                    <p className="editMemory__input-label">Date of Memory</p>
                    <input
                      className="editMemory__date-text editMemory__input"
                      type="date"
                      name="dateOfMemory"
                      value={dateOfMemory}
                      onChange={(e) => this.handleChange(e)}
                      placeholder="Enter the date of your memory (Ex. 2021-01-25)"
                    />
                  </div>
                </div>

                <p className="editMemory__input-label">Description</p>
                <textarea
                  className="editMemory__input"
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Write a description of your memory, how did you feel? What happened?"
                ></textarea>
                <p className="editMemory__body editMemory__body--counter">
                  {" "}
                  Remaining Characters: {this.state.description.length} / 5000
                </p>
              </div>

              <div className="editMemory__box editMemory__box--feeling">
                <p className="editMemory__input-label">
                  How did this memory make you feel?
                </p>
                <p className="editMemory__input-label">
                  Select a feeling that best summarizes your feelings around
                  this memory from the list provided.
                </p>
                <select
                  className="editMemory__input"
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

              <div className="editMemory__box editMemory__box--helpful">
                <p className="editMemory__input-label">
                  Is this a helpful memory?
                </p>
                <p className="editMemory__input-label">
                  This section is to identify if this memory is one that brings
                  positive (Yes) feelings or negative (No) feelings.
                </p>
                <select
                  className="editMemory__input"
                  id="helpfulThought"
                  name="helpfulThought"
                  value={helpfulThought}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div className="editMemory__box editMemory__box--related">
                <p className="editMemory__input-label">Related Moment</p>
                <input
                  className="editMemory__input"
                  type="text"
                  name="relatedMoment"
                  value={relatedMoment}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="What reminds you of this moment? A song? A place? A person? Feel free to leave this spot blank if it is not applicable to this memory."
                />
              </div>
            </div>

            <div className="editMemory__form-button-container">
              <div
                onClick={this.handleCancel}
                className="editMemory__box editMemory__box--cancel"
              >
                <p className="editMemory__call-to-action">Cancel Changes</p>
              </div>

              <div
                onClick={this.handleSubmit}
                className="editMemory__box editMemory__box--confirm"
              >
                <p className="editMemory__call-to-action">Save Changes</p>
              </div>

              <div className="editMemory__box editMemory__box--update">
                <p className="editMemory__subheader editMemory__subheader--time-header">
                  Memory was created by you on:{" "}
                </p>
                <p className="editMemory__time-text">
                  {dateCreated.slice(0, 10)}
                </p>
                <p className="editMemory__subheader editMemory__subheader--time-header">
                  Memory was last updated on:{" "}
                </p>
                <p className="editMemory__time-text">
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
