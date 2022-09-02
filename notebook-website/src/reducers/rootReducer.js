const initialProducts = [
  {
    id: 1,
    name: "Warm Tones Notebook",
    category: "Notebook",
    href: "#",
    price: "$25",
    priceint: 25,
    imageSrc: "/images/opensource/notebook1.jpeg",
    imageAlt: "Multi-colored notebook",
  },
  {
    id: 2,
    name: "Hello Revival Notebook",
    category: "Notebook",
    href: "#",
    price: "$35",
    priceint: 35,
    imageSrc: "/images/opensource/notebook3.jpeg",
    imageAlt: "Leather notebook",
  },
  {
    id: 3,
    name: "Leather Bound Notebooks",
    category: "Notebook",
    href: "#",
    price: "$125",
    priceint: 125,
    imageSrc: "/images/opensource/notebook2.JPG",
    imageAlt: "Set of 4 leather bound notebooks",
  },
  {
    id: 4,
    name: "Pastel Pink Focus Notebook",
    category: "Notebook",
    href: "#",
    price: "$25",
    priceint: 25,
    imageSrc: "/images/opensource/notebook6.jpeg",
    imageAlt: "Pastel pink focus notebook",
  },
  {
    id: 5,
    name: "Daily Planner",
    category: "Planner",
    href: "#",
    price: "$45",
    priceint: 45,
    imageSrc: "/images/opensource/planner1.jpeg",
    imageAlt: "Green leather notebook style daily planner",
  },
  {
    id: 6,
    name: "Filofax Organizer",
    category: "Planner",
    href: "#",
    price: "$100",
    priceint: 100,
    imageSrc: "/images/opensource/planner2.jpeg",
    imageAlt: "Filofax brand three ring organizer",
  },
  {
    id: 7,
    name: "Orange Leather Planner",
    category: "Planner",
    href: "#",
    price: "$30",
    priceint: 30,
    imageSrc: "/images/opensource/planner3.jpeg",
    imageAlt: "Orange Leather Planner",
  },
  {
    id: 8,
    name: "Linen Notebook Planner",
    category: "Planner",
    href: "#",
    price: "$35",
    priceint: 35,
    imageSrc: "/images/opensource/planner4.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Plain Black Pen",
    category: "Pen",
    href: "#",
    price: "$5",
    priceint: 5,
    imageSrc: "/images/opensource/pen6.jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 10,
    name: "Floral Caligraphy Pen",
    category: "Pen",
    href: "#",
    price: "$20",
    priceint: 20,
    imageSrc: "/images/opensource/pen2.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 11,
    name: "2 Pack Pink Ballpoint Pens",
    category: "Pen",
    href: "#",
    price: "$30",
    priceint: 30,
    imageSrc: "/images/opensource/pen3.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 12,
    name: "Caligraphy Pen",
    category: "Pen",
    href: "#",
    price: "$40",
    priceint: 40,
    imageSrc: "/images/opensource/pen5.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
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
      const existingItem = state.cart.find(
        ({ id }) => action?.payload.id === id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        return { ...state, cart: [...newCart] };
      } else {
        return {
          ...state,
          cart: [...newCart, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const existingItem2 = state.cart.find(
        ({ id }) => action?.payload.id === id
      );
      if (existingItem2 && existingItem2.quantity > 1) {
        existingItem2.quantity--;

        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action?.payload.id),
        };
      }
    case "EMPTY_CART":
      const emptyCart = [];
      return { ...state, cart: emptyCart };
    default:
      return state;
  }
};

export default rootReducer;
