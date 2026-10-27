// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." ref={inputRef} />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

//Explanation:
// The input field is assigned a ref using the 'useRef' hook,
// which allows direct access to the DOM element.
// When the button is clicked, the 'focusInput' function is called and
// uses 'inputRef.current.focus()' to set focus on the input field.
// A ref is needed to have a constant reference to an element.
