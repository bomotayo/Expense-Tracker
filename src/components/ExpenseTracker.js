import React, { useContext } from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import { ThemeContext } from "../context/ThemeContext";

function ExpenseTracker() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="expense-tracker-container"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default ExpenseTracker;
