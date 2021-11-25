import { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import AddNewMemory from "./components/AddNewMemory/AddNewMemory";
import DeleteMemory from "./components/DeleteMemory/DeleteMemory";
import EditMemory from "./components/EditMemory/EditMemory";
import Landing from "./components/Landing/Landing";
import LogInSignUp from "./components/LogInSignUp/LogInSignUp";
import MemoryDetails from "./components/MemoryDetails/MemoryDetails";
import MemoryList from "./components/MemoryList/MemoryList";
import MemoryOverview from "./components/MemoryOverview/MemoryOverview";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LogInSignUp} />
          <Route exact path="/profile" component={MemoryOverview} />
          <Route
            exact
            path="/profile/:userID/memories"
            component={MemoryList}
          />
          <Route
            exact
            path="/profile/:userID/memories/add-memory"
            component={AddNewMemory}
          />
          <Route
            exact
            path="/profile/:userID/memories/:memoryID"
            component={MemoryDetails}
          />
          <Route
            exact
            path="/profile/:userID/memories/:memoryID/edit-memory"
            component={EditMemory}
          />
          <Route
            exact
            path="/profile/:userID/memories/:memoryID/delete-memory"
            component={DeleteMemory}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
