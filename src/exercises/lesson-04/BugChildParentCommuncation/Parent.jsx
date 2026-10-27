import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

// Explanation:
// The issue is that the Child component is not in connection with its Parent component.
// The 'onCLick' handler is an empty function and does not update the state of the Parent component.
// To correct this, the 'onIncrement' parameter is passed as a prop in the Child component while the 'increment' function is passed as an argument to the 'onIncrement' prop in the Parent component. This way, when the button in the Child component is clicked, it will call the 'increment' function in the Parent component and update the state accordingly.
// The child component is now able to communicate with the parent component and update its state when the button is clicked.
