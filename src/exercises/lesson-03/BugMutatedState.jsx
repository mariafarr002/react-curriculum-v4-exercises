// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount((previous) => previous + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)

/*
The issue here is that a React state should never be mutated directly. 
This can lead to unexpected behavior and bugs in the code because it does not let React know to keep track of the changes internally. 
It only changes the count locally.
By taking the previous value and adding 1 to it, we can ensure that the state is updated correctly and consistently.
*/
