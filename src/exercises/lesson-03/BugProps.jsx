// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)

/*
The issue with this componenet is that 'message' is not a recognized state in React.
So 'message' inside the 'function handleChange' does not update nor render.
React will only render when a state is changed.
Having 'message' be stored in a state with 'useState' allows it to be updated with 'setMessage' so any changes can
be tracked by React and render correctly.
Also, using a variable with 'let' will not be tracked by React and therefore changes will not be displayed.
*/
