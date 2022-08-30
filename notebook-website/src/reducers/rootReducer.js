const initialProducts = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
];

const initialState = {
  cart: [],
  products: initialProducts,
};

const rootReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "ADD_TO_CART":
      const newCart = state.cart;
      return { ...state, cart: [...newCart, action?.payload] };
    default:
      return state;
  }
};

export default rootReducer;
