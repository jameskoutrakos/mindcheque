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
  };

  setUpdateDate = () => {
    const today = new Date();
    const updateDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    console.log("Update Date: ", updateDate);
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
        console.log("FoundMemory: ", foundMemory);
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
    console.log("EDIT MEMORY MOUNTED");
    const { userID, memoryID } = this.props.match.params;
    console.log("UserID: ", userID, " ", "MemoryID: ", memoryID);
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
    console.log("UserID: " + userID);
    console.log("MemoryID: " + memoryID);
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
        console.log(response.data);
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
                  <input
                    className="editMemory__header"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => this.handleChange(e)}
                    placeholder="Please enter a memory title"
                  />

                  <div className="editMemory__date-wrapper">
                    <p className="editMemory__subheader">Date of Memory</p>
                    <input
                      className="editMemory__date-text"
                      type="date"
                      name="dateOfMemory"
                      value={dateOfMemory}
                      onChange={(e) => this.handleChange(e)}
                      placeholder="Enter the date of your memory (Ex. 2021-01-25)"
                    />
                  </div>
                </div>

                <p className="editMemory__subheader">Description</p>
                <textarea
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Please enter a description of your memory"
                ></textarea>
              </div>

              <div className="editMemory__box editMemory__box--feeling">
                <p className="editMemory__subheader">
                  Select a feeling that best describes this memory:
                </p>
                <select
                  id="feeling"
                  name="feeling"
                  value={feeling}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="Proud">Proud</option>
                  <option value="Excited">Excited</option>
                  <option value="Happy">Happy</option>
                  <option value="Alright">Alright</option>
                  <option value="Anxious">Anxious</option>
                  <option value="Upset">Upset</option>
                </select>
              </div>

              <div className="editMemory__box editMemory__box--helpful">
                <p className="editMemory__subheader">Helpful Thought?</p>
                <select
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
                <p className="editMemory__subheader">Related Moment</p>
                <input
                  type="text"
                  name="relatedMoment"
                  value={relatedMoment}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Write something here that reminds you of this moment (i.e. a song, a place, or a person)"
                />
              </div>
            </div>

            <div className="editMemory__form-button-container">
              <div
                onClick={this.handleCancel}
                className="editMemory__box editMemory__box--cancel"
              >
                <p>Cancel</p>
              </div>

              <div
                onClick={this.handleSubmit}
                className="editMemory__box editMemory__box--confirm"
              >
                <p>Save</p>
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
