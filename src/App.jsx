import { useRef } from "react";

const App = () => {
  const pointerRef = useRef(null);

  const handlePointerMove = (e) => {
    const pointer = pointerRef.current;
    pointer.style.left = e.clientX + "px";
    pointer.style.top = e.clientY + "px";
  };

  return (
    <div onMouseMove={(e) => handlePointerMove(e)}>
      <h1>hello dosto to kese ho aap sabhi </h1>
      <div id="pointer" ref={pointerRef} className="pointer"></div>
    </div>
  );
};

export default App;
