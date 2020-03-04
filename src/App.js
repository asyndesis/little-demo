import React from "react";
import UserStatus from "./components/UserStatus";
import "./App.scss";

function App() {
  const user = {
    imgUrl: "http://trevorbonomi.com/img/trebs.jpg",
    status: "online",
    lineOne: "Harry Robinson",
    lineTwo: "Online | 14h"
  };
  const [width, setWidth] = React.useState("50%");
  return (
    <div className="App">
      <div className="clamp" style={{ width: width }}>
        <UserStatus user={user} />
      </div>
      <label className="label">Enter in percent or pixels</label>
      <input
        className="input-text"
        type="text"
        min="0"
        value={width}
        onChange={e => setWidth(e.target.value)}
      />
    </div>
  );
}

export default App;
