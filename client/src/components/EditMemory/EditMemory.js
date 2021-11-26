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

  isFormValid = () => {
    if (
      !this.state.title ||
      !this.state.description ||
      !this.state.dateOfMemory ||
      !this.state.feeling ||
      !this.state.helpfulThought
    ) {
      return false;
    }
    return true;
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
    if (this.isFormValid()) {
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
          // this.props.history.goBack();
        });
    } else {
      alert("Failed to upload!");
    }
  };

  render() {
    const {
      title,
      description,
      dateOfMemory,
      dateLastUpdated,
      feeling,
      helpfulThought,
      relatedMoment,
    } = this.state;

    return (
      <section className="editMemory">
        <article className="editMemory__container">
          <h1>EditMemory</h1>
          <form>
            <div className="editMemory__form">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => this.handleChange(e)}
                placeholder="Please enter a memory title"
              />
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => this.handleChange(e)}
                placeholder="Please enter a description of your memory"
              />
              <label>Date of Memory</label>
              <input
                type="text"
                name="dateOfMemory"
                value={dateOfMemory}
                onChange={(e) => this.handleChange(e)}
                placeholder="Enter the date of your memory (Ex. 2021-01-25)"
              />
              <label>Feeling</label>
              <input
                type="text"
                name="feeling"
                value={feeling}
                onChange={(e) => this.handleChange(e)}
                placeholder="Select a feeling"
              />
              <label>Helpful Thought?</label>
              <input
                type="text"
                name="helpfulThought"
                value={helpfulThought}
                onChange={(e) => this.handleChange(e)}
                placeholder="Was this a helpful thought?"
              />
              <label>Related Moment</label>
              <input
                type="text"
                name="relatedMoment"
                value={relatedMoment}
                onChange={(e) => this.handleChange(e)}
                placeholder="Write something here that reminds you of this moment (i.e. a song, a place, or a person)"
              />
            </div>
            <div className="editMemory__form-button-container">
              <button type="secondary" onClick={this.handleCancel}>
                Cancel
              </button>
              <button type="primary" onClick={this.handleSubmit}>
                Save
              </button>
              <h6>
                Memory was last updated on: {dateLastUpdated.slice(0, 10)}
              </h6>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default EditMemory;
