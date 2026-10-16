//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)

/*
The issue with this component is that the useEffect hook is missing a dependency array. 
The dependency array is needed to tell React when to re-run the effect.
Without it, the effect runs on every render, updating the state and causing the 'setCount' to render over and over.
So that's why after every render, the count infinitely loops.
Adding an empty dependency array to the useEffect hook will ensure that the effect only runs once 
after the initial render, preventing the infinite loop and allowing the count to update correctly.
*/
