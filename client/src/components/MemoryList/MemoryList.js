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
          <h1>{firstName}'s Memories</h1>
          <Link to={`/profile/${userID}/memories/add-memory`}>
            ADD NEW MEMORY
          </Link>
          <ul>
            {this.props.userMemories.map((memory) => {
              return (
                <li key={memory.memoryID}>
                  <Link
                    to={`/profile/${memory.userID}/memories/${memory.memoryID}`}
                  >
                    {memory.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    );
  }
}

export default MemoryList;
