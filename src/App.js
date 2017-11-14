import React, { Component } from 'react';
import { createStore, combineReducers } from "redux";
import './App.css';


class App extends Component {
  render() {

    const userReducer = function (state = {}, action) {
      switch (action.type) {
        case "CHANGE_NAME":
          state = { ...state, name: action.payload }
          break;
        case "CHANGE_AGE":
          state = { ...state, age: action.payload }
          break;

        default:
          break;
      }
      return state;
    };

    const tweetsReducer = function (state = [], action) {
      return state;
    };

    const reducers = combineReducers({
      user: userReducer,
      tweets: tweetsReducer
    });

    const store = createStore(reducers);

    store.subscribe(() => {
      console.log("store changed:", store.getState())
    });

    store.dispatch({ type: "CHANGE_NAME", payload: "SANTIAGO" })
    store.dispatch({ type: "CHANGE_AGE", payload: 33 })
    store.dispatch({ type: "CHANGE_AGE", payload: 34 })
    store.dispatch({ type: "INC", payload: 4 })
    store.dispatch({ type: "DEC", payload: 1 })

    return (
      <div className="App">
        {/* {store.getState()} */}
      </div>
    );
  }
}

export default App;
