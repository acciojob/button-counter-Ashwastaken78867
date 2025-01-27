import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  // Initialize state to track the button click count
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      {/* Do not remove the main div */}
    </div>
  );
};

export default App;
