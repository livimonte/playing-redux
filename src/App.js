import React, { Component } from "react";
import { Provider } from "react-redux";

// Common Redux
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import store from "./store/index";

// React Hooks + Redux
import CourseList from "./components/CourseList";
import storeHooks from "./store/storeHooks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Common Redux</h1>
        <hr />
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>

        <br />
        <hr />
        <h1>React Hooks + Redux</h1>
        <Provider store={storeHooks}>
          <CourseList />
        </Provider>
      </div>
    );
  }
}

export default App;
