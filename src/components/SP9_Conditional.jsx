import { useState } from "react";

function SP9_Conditional() {

  const [show, setShow] = useState(false);

  return (

    <div>

      <h2>SP9 Conditional Rendering</h2>

      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <p>Hello React</p>}

    </div>
  );
}

export default SP9_Conditional;