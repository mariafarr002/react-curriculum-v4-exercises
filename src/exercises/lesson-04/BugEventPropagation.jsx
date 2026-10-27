// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(event) {
    event.stopPropagation();
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// Explanation:
//Because of event bubbling (where events propagate upward through DOM elements),
// clicking the inner button will also trigger the click event on the parent element as well.
// By using 'event.stopPropagation()' in the 'handleInnerClick' function, it stops the event from "bubbling" up to the parent elements.
// This way, only the inner button will trigger an alert when clicked.
