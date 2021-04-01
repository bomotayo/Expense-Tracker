import { v4 as uuidv4 } from "uuid";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return state.filter((transaction) => transaction.id !== action.payload);
    case "ADD_TRANSACTION":
      return [
        ...state,
        {
          text: action.payload.text,
          amount: action.payload.amount,
          id: uuidv4(),
        },
      ];

    default:
      return state;
  }
};

export default AppReducer;
