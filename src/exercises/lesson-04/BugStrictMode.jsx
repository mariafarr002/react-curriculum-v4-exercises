// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const idTimer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(idTimer);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// // Write your explanation of how StrictMode helps us catch this bug
// Here, the 'useEffect' hook was not properly cleaning up the intervals and causing the counter to increment by twos.
// By using StrictMode, we can see the mounting and unmounting of components in development mode, which allows us to catch potential issues with side effects.
// This helps us catch bugs that may not be obvious when the component is only rendered once.
// The 'setInterval' was causing the counter to increment incorrectly, and 'StrictMode' helped us identify that issue and showed us the unexpected behavior.
