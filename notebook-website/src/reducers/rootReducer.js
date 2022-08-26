const initialProducts = [
  { description: "hat", price: "$2" },
  { description: "bat", price: "$2" },
  { description: "cat", price: "$2" },
  { description: "sat", price: "$2" },
  { description: "lat", price: "$2" },
  { description: "rat", price: "$2" },
  { description: "batttt", price: "$2" },
];

const initialState = {
  cart: [],
  products: initialProducts,
  counter: 0,
  user: "Joe",
};

const rootReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_TO_CART":
      const newCart = state.cart;
      return { ...state, cart: [...newCart, action?.payload] };
    default:
      return state;
  }
};

export default rootReducer;
