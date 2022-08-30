const initialProducts = [
  {
    id: 1,
    name: "Notebook1",
    category: "Notebook",
    href: "#",
    price: "$48",
    imageSrc: "/images/opensource/notebook1.jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    category: "Notebook",
    href: "#",
    price: "$35",
    imageSrc: "/images/opensource/notebook3.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    category: "Notebook",
    href: "#",
    price: "$89",
    imageSrc: "/images/opensource/notebook2.JPG",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    category: "Notebook",
    href: "#",
    price: "$35",
    imageSrc: "/images/opensource/notebook6.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Planner1",
    category: "Planner",
    href: "#",
    price: "$48",
    imageSrc: "/images/opensource/planner1.jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Planner2",
    category: "Planner",
    href: "#",
    price: "$35",
    imageSrc: "/images/opensource/planner2.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Planner3",
    category: "Planner",
    href: "#",
    price: "$89",
    imageSrc: "/images/opensource/planner3.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Planner4",
    category: "Planner",
    href: "#",
    price: "$35",
    imageSrc: "/images/opensource/planner4.jpeg",
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
      return { ...state, cart: [...newCart, action?.payload] };
    default:
      return state;
  }
};

export default rootReducer;
