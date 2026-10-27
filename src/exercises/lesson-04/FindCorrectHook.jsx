// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const clickCount = useRef(0); // ← correct implementation
  const buttonRef = useRef(null);

  function handleClick() {
    clickCount.current++;
    buttonRef.current.textContent = `${clickCount.current} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick} ref={buttonRef}>
        {clickCount.current} Clicks
      </button>
    </div>
  );
}

//Explanation:
// The 'clickCount' is just a plain variable and does not notify React of any changes, rendering it useless globally.
// This causes the counter to not update the UI, never changing the text.
// 'useRef is the correct hook to use here.
// It doesn't cause the component to re-render when the value changes, but it does persist the value across renders and allows us to directly change the DOM element's text content.
