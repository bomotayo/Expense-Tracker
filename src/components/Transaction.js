import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { ThemeContext } from "../context/ThemeContext";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const { isLightTheme, dark, light } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div
      style={{ background: theme.ui }}
      className={`list-item ${transaction.amount < 0 ? "minus" : "plus"}`}
    >
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
      <span className="transaction-text">{transaction.text}</span>
      <span className="transaction-amount">{`${sign}$${Math.abs(
        transaction.amount
      )}`}</span>
    </div>
  );
}

export default Transaction;
