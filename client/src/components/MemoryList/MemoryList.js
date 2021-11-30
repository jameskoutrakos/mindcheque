import "./MemoryList.scss";

import { Component } from "react";
import { Link } from "react-router-dom";

class MemoryList extends Component {
  componentDidMount() {
    const userID = this.props.match.params.userID;
    console.log("MEMORY LIST MOUNTED");
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
                    <p>{memory.title}</p>
                    <p>
                      {memory.dateOfMemory !== undefined &&
                        memory.dateOfMemory.slice(0, 10)}
                    </p>
                  </div>
                  <p> CLICK </p>
                </Link>
              );
            })}
          </ul>
          <Link to={`/profile/${userID}`} className="memoryList__box">
            <h4>Return to Memory Overview</h4>
          </Link>
        </article>
      </section>
    );
  }
}

export default MemoryList;
