import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      transactions
        .map((transaction) => transaction.amount)
        .reduce((acc, curr) => (acc += curr), 0)
        .toFixed(2)
    );
  }, [transactions]);
  return (
    <div className="balance">
      <h1>Your Balance</h1>
      <h1 className="balance-total">
        {total >= 0 ? `$${total}` : `-$${Math.abs(total).toFixed(2)}`}
      </h1>
    </div>
  );
}

export default Balance;
