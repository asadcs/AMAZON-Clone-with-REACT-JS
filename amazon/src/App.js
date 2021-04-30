import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import { useReducer } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "initCount":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <Router>
      <div className="app">
        {state.count}
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "initCount", payload: 0 })}>
          Initialize
        </button>
        {/* <AppState>
          {" "} */}
        <Switch>
          <Route path="/checkout">
            <Header></Header>
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
        {/* </AppState> */}
      </div>
    </Router>
  );
}

export default App;
