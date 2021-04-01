import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "../reducer/AppReducer";

//Create context
export const GlobalContext = createContext();

//Provider component
const GlobalContextProvider = (props) => {
  const [transactions, dispatch] = useReducer(AppReducer, [], () => {
    const localData = localStorage.getItem("transactions");

    return localData ? JSON.parse(localData) : [];
  });

  //Sets Item in local storage when transactions changes on render
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
