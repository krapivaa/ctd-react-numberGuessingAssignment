import React from "react";
import NumberGuessingGame from "./NumberGuessingGame";
import "./App.css";


const App = () => {
  // const [age, setAge] = React.useState(22);

    return (
      <div className="App">
        <NumberGuessingGame />
        {/* {age}
        <button onClick={() => setAge (age + 3)}>Submit</button> */}
      </div>
    );
  };


export default App;
