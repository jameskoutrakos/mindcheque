import "./MemoryList.scss";

import { Component } from "react";
import { Link } from "react-router-dom";

import chevronBlack from "../../assets/icons/next-black.svg";

class MemoryList extends Component {
  componentDidMount() {
    const userID = this.props.match.params.userID;
    this.props.getSingleUser(userID);
    this.props.getUserMemories(userID);
  }

  render() {
    const { userID, firstName } = this.props.activeUser;

    return (
      <section className="memoryList">
        <article className="memoryList__container">
          <div className="memoryList__header-box">
            <h2>{firstName}'s Memories</h2>
          </div>
          <ul className="memoryList__ul">
            {this.props.userMemories.map((memory) => {
              return (
                <Link
                  key={memory.memoryID}
                  to={`/profile/${memory.userID}/memories/${memory.memoryID}`}
                  className="memoryList__li"
                >
                  <div>
                    <p className="memoryList__title">{memory.title}</p>
                    <p className="memoryList__date">
                      Date of Memory:{" "}
                      {memory.dateOfMemory !== undefined &&
                        memory.dateOfMemory.slice(0, 10)}
                    </p>
                  </div>
                  <img
                    className="memoryList__img"
                    src={chevronBlack}
                    alt={`select here to see the memory titled ${memory.title}`}
                  />
                </Link>
              );
            })}
          </ul>
          <Link to={`/profile/${userID}`} className="memoryList__box">
            <div className="memoryList__img memoryList__img--back-arrow"></div>
            <p className="memoryList__return-text">Return to Memory Overview</p>
          </Link>
        </article>
      </section>
    );
  }
}

export default MemoryList;
