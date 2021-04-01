import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { ThemeContext } from "../context/ThemeContext";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const { isLightTheme, dark, light } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    setIncome(
      amounts
        .filter((item) => item > 0)
        .reduce((acc, curr) => (acc += curr), 0)
        .toFixed(2)
    );
    setExpense(
      amounts
        .filter((item) => item <= 0)
        .reduce((acc, curr) => (acc -= curr), 0)
        .toFixed(2)
    );
  }, [transactions]);

  return (
    <div className="income-exp-container" style={{ background: theme.ui }}>
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money">
          -${expense}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
