import React, { createContext, useContext, useReducer } from "react";

//Step 01
export const StateContext = createContext();
//Step 02  Building a Provider --to wrap entire App inside this provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Step 03 : Wrap App component inside State Provider in index.js

// Step 04 : In Index.js pass props in the   <StateProvider initialState={} reducer={}>

// Step 05 :  create a file reducer.js

// Step 06 : Inside reducer.js declare and define initialState

// Step 07 :  Use initalState inside Index.js    import { initialState } from "./reducer";

// Step 08 : define reducer function inside reducer.js

// Step 09 :  Use reducer inside Index.js    import { initialState } from "./reducer";

// Step 10 : This is how we use it inside  components
export const useStateValue = () => useContext(StateContext);

//Step 11 : inside any component use the code const [{ basket }] = useStateValue();

//Step 12 : {basket.length} can provide the value of basket
