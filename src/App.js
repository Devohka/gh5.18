
import './App.css';
import { useReducer } from 'react';

function reducer(state, action) {
  if (action === "green") {
    // state.value + 5;
    return {
      value: state.value + 5,
      text: "нажми на квадрат"
    };
  };

};


const button = {
  marginLeft: setInterval(() =>  Math.random() * (100 - 1) + 1, 2000),
}


function App() {
  const [state, dispatch] = useReducer(reducer, { value: 0, text: "нажми на квадрат" });
  return (
    <div>
      <h1>{state.text}</h1>
      <p>{state.value}</p>


      <button onClick={() => dispatch("green")} type='button' style={button}></button>
    </div>
  );
}

export default App;
