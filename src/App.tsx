import React from "react";
import ClickCounter from "./components/ClickCounter";
import CryptoChart from "./components/CryptoChart";

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>ADBERT Frontend 面試作業</h2>
      <h3>1. 點擊計數器</h3>
      <ClickCounter />
      <h3>2. 加密貨幣價格走勢圖</h3>
      <CryptoChart />
    </div>
  );
};

export default App;
