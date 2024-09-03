import React from "react";
import { useState } from "react";
import { dbank_backend } from "declarations/dbank_backend";

function App() {
  async function updateBalance() {
    const currentAmount = await dbank_backend.checkBalance();
    document.getElementById("value").innerText =
      Math.round(currentAmount * 100) / 100;
  }

  window.addEventListener("load", async () => {
    updateBalance();
  });

  const [value, setValue] = useState({
    topup: 0,
    withdraw: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setValue((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  async function submitForum(event) {
    event.preventDefault();

    const topup = parseFloat(value.topup);
    const withdraw = parseFloat(value.withdraw);
    topup ? await dbank_backend.topup(topup) : null;
    withdraw ? await dbank_backend.withDraw(withdraw) : null;

    setValue(() => {
      return {
        topup: 0,
        withdraw: 0,
      };
    });

    updateBalance();
  }

  return (
    <div className="container">
      <img src="dbank_logo.png" alt="DBank logo" width="100" />
      <h1>
        Current Balance: $ <span id="value"></span>
      </h1>
      <div className="divider"></div>
      <form onSubmit={submitForum}>
        <h2>Amount to Top Up</h2>
        <input
          id="inputAmount"
          type="number"
          name="topup"
          onChange={handleChange}
          value={value.topup ? value.topup : ""}
        />
        <h2>Amount to Withdraw</h2>
        <input
          id="withdrawAmount"
          type="number"
          name="withdraw"
          onChange={handleChange}
          value={value.withdraw ? value.withdraw : ""}
        />
        <input type="submit" id="submit-btn" value="Finalise Transaction" />
      </form>
    </div>
  );
}

export default App;
