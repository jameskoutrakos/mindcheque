import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import AddNewMemory from "./components/AddNewMemory/AddNewMemory";
// import DeleteMemory from "./components/DeleteMemory/DeleteMemory";
import EditMemory from "./components/EditMemory/EditMemory";
import Landing from "./components/Landing/Landing";
import LogInSignUp from "./components/LogInSignUp/LogInSignUp";
import MemoryDetails from "./components/MemoryDetails/MemoryDetails";
import MemoryList from "./components/MemoryList/MemoryList";
import MemoryOverview from "./components/MemoryOverview/MemoryOverview";
import Footer from "./components/Footer/Footer";

const host = "http://localhost:8080";

class App extends Component {
  // Set initial state
  state = {
    allUsers: [],
    activeUser: [],
    memories: [],
    userMemories: [],
    currentMemory: [],
  };

  getAllUsers = () => {
    axios
      .get(`${host}/profile/`)
      .then((response) => {
        this.setState({ allUsers: response.data });
        console.log("All Users: ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addNewUser = (newUser) => {
    axios
      .post(`${host}/profile/`, newUser)
      .then((response) => {
        this.getAllUsers();
        console.log("Add User: ", response.data);
        alert(
          "Account created! Please log in using the 'Returning User' form above!"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get active user by userID

  getSingleUser = (userID) => {
    axios
      .get(`${host}/profile/${userID}`)
      .then((response) => {
        this.setState({ activeUser: response.data[0] });
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get active user's list of memories

  getUserMemories = (userID) => {
    axios
      .get(`${host}/profile/${userID}/memories`)
      .then((response) => {
        this.setState({ userMemories: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get current user's requested memory

  getCurrentMemory = (userID, memoryID) => {
    axios
      .get(`${host}/profile/${userID}/memories/${memoryID}`)
      .then((response) => {
        this.setState({ currentMemory: response.data[0] });
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Add a new memory

  addMemoryByUser = (userID, newMemory) => {
    axios
      .post(`${host}/profile/${userID}/memories/add-memory`, newMemory)
      .then((response) => {
        this.getUserMemories(userID);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Delete a memory

  deleteMemoryByUser = (userID, memoryID) => {
    axios
      .delete(`${host}/profile/${userID}/memories/${memoryID}/delete-memory`)
      .then((response) => {
        this.getUserMemories(userID);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Component Lifecycle Methods

  componentDidMount() {
    console.log("APP MOUNTED");
  }

  componentDidUpdate() {
    console.log("APP UPDATED");
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/profile"
            render={(routerProps) => (
              <LogInSignUp
                allUsers={this.state.allUsers}
                getAllUsers={this.getAllUsers}
                addNewUser={this.addNewUser}
                {...routerProps}
              />
            )}
          />
          <Route
            exact
            path="/profile/:userID"
            render={(routerProps) => (
              <MemoryOverview
                activeUser={this.state.activeUser}
                getSingleUser={this.getSingleUser}
                {...routerProps}
              />
            )}
          />
          <Route
            exact
            path="/profile/:userID/memories"
            render={(routerProps) => (
              <MemoryList
                activeUser={this.state.activeUser}
                getSingleUser={this.getSingleUser}
                userMemories={this.state.userMemories}
                getUserMemories={this.getUserMemories}
                {...routerProps}
              />
            )}
          />
          <Route
            exact
            path="/profile/:userID/memories/add-memory"
            render={(routerProps) => (
              <AddNewMemory
                activeUser={this.state.activeUser}
                getSingleUser={this.getSingleUser}
                userMemories={this.state.userMemories}
                getUserMemories={this.getUserMemories}
                addMemoryByUser={this.addMemoryByUser}
                {...routerProps}
              />
            )}
          />
          <Route
            exact
            path="/profile/:userID/memories/:memoryID"
            render={(routerProps) => (
              <MemoryDetails
                currentMemory={this.state.currentMemory}
                getCurrentMemory={this.getCurrentMemory}
                deleteMemoryByUser={this.deleteMemoryByUser}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/profile/:userID/memories/:memoryID/edit-memory"
            component={EditMemory}
          />
          <Route
            exact
            path="/profile/:userID/memories/:memoryID/delete-memory"
            render={(routerProps) => (
              <MemoryDetails
                // currentMemory={this.state.currentMemory}
                // getCurrentMemory={this.getCurrentMemory}
                deleteMemoryByUser={this.deleteMemoryByUser}
                {...routerProps}
              />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
