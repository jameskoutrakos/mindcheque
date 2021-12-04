import { Component } from "react";
import "./DeleteMemory.scss";

function Modal({ modal, closeModal, props }) {
  const { userID, memoryID, history, deleteMemoryByUser } = props;
  const handleClick = (e) => {
    e.preventDefault();
    deleteMemoryByUser(userID, memoryID);
    closeModal(e);
    history.push(`/profile/${userID}/memories/`);
  };

  return (
    <div
      className={`overlay ${modal ? "overlay--visible" : "overlay--hidden"}
    `}
    >
      <article className="deleteMemory">
        <div className="deleteMemory__button-container">
          <p
            className="deleteMemory__button deleteMemory__button--cancel"
            onClick={closeModal}
          >
            Cancel
          </p>
          <p
            className="deleteMemory__button deleteMemory__button--delete"
            onClick={handleClick}
          >
            Confirm Delete
          </p>
        </div>
      </article>
    </div>
  );
}

export { Modal };

class DeleteMemory extends Component {
  state = { modal: false };

  openModal = (e) => {
    e.preventDefault();
    this.setState({ modal: true });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ modal: false });
  };

  render() {
    return (
      <>
        <p
          type="button"
          className="deleteMemory__prompt"
          onClick={this.openModal}
        >
          Delete Memory
        </p>
        <Modal
          modal={this.state.modal}
          closeModal={this.closeModal}
          props={this.props}
        />
      </>
    );
  }
}

export default DeleteMemory;
