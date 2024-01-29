"use client";
import { useReducer } from "react";

type ActionType = {
  type: "reset" | "decrement" | "increment";
};

type StateType = {
  count: number;
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "reset":
      return { count: 0 };
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const CounterReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      Count: {state.count}
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </div>
  );
};

export default CounterReducer;
