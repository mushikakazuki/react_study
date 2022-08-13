import React from "react";

function App() {
  return (
    <React.Fragment>
      <label>入力ホーム</label>
      <input
        type="text"
        onChange={() => {
          console.log("I am Click.");
        }}
      />
    </React.Fragment>
  );
}

export default App;
