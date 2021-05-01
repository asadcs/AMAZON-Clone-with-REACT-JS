export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  //   console.log(action);
  //   console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASKET":
      //Logic for adding item
      let tempBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );

      if (index >= 0) {
        tempBasket.splice(index, 1);
      } else {
        console.log("cant remove product");
      }
      return { ...state, basket: tempBasket };
    default:
      return state;
  }
}

export default reducer;
