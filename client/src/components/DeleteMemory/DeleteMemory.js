import { Component } from "react";
import "./DeleteMemory.scss";

function Modal({ modal, closeModal, props }) {
  console.log(props);
  const { userID, memoryID, title, history, deleteMemoryByUser } = props;
  const handleClick = (e) => {
    e.preventDefault();
    deleteMemoryByUser(userID, memoryID);
    closeModal(e);
    history.push(`/profile/${userID}/memories/`);
  };

  return (
    <div
      className={`overlay ${
        modal ? "overlay overlay--visible" : "overlay overlay--hidden"
      }
    `}
    >
      <h4>Delete {title}?</h4>
      <button onClick={closeModal}>Cancel</button>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export { Modal };

class DeleteMemory extends Component {
  state = { modal: false };

  openModal = (e) => {
    e.preventDefault();
    this.setState({ modal: true });
    // this.props.history.push(
    //   `/profile/${this.props.userID}/memories/${this.props.memoryID}/delete-memory`
    // );
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ modal: false });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          Delete Memory
        </button>
        <Modal
          modal={this.state.modal}
          closeModal={this.closeModal}
          props={this.props}
        />
      </div>
    );
  }
}

export default DeleteMemory;
