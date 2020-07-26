import React, { useState, useEffect, useRef } from "react";
import BasicAppPresent from "../basicApp/BasicAppPresent";
import RelatedFiles from "../footer/RelatedFiles";

const BasicHooks = () => {
  const [clickTimes, setClickTimes] = useState(0);
  const [keyPressTimes, setKeyPressTimes] = useState(0);
  const [pressedKey, setPressedKey] = useState("null");
  const [secretKey, setSecretKey] = useState(null);
  const gameRef = useRef();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
    // invoke below cleanup function first when the useEffect re-call again(not the initial render)
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [secretKey, pressedKey]);

  useEffect(() => {
    // example of use ref
    gameRef.current.focus();
    gameRef.current.style.background = "rgba(0, 123, 255, 0.17)";
  }, []); // Only invoke once == ComponentDidMount()

  const handleFieldChange = () => {
    setSecretKey(null);
    setClickTimes(clickTimes + 1);
    setKeyPressTimes(0);
    setPressedKey("null");
  };

  const handleKeyPress = (event) => {
    if (secretKey === null) {
      setSecretKey(event.key);
    } else if (event.key === "Escape") {
      setSecretKey(null);
      setClickTimes(0);
      setKeyPressTimes(0);
      setPressedKey("null");
    } else if (pressedKey === secretKey) {
      // do nothing
    } else {
      setPressedKey(event.key);
      setKeyPressTimes(keyPressTimes + 1);
    }
  };

  return (
    <div className="text-center">
      <div ref={gameRef}>
        <BasicAppPresent
          clickTimes={clickTimes}
          keyPressTimes={keyPressTimes}
          pressedKey={pressedKey}
          secretKey={secretKey}
          handleFieldChange={handleFieldChange}
        />
      </div>

      <RelatedFiles>
        <li className="list-group-item">
          src/reactApp.js --- React main entry point
        </li>
        <li className="list-group-item">
          src/hookApp/BasicHooks.js --- Hooks Components NOT use this.state &
          componentDidMount
        </li>
        <li className="list-group-item">
          src/components/basicApp/BasicAppPresent.js --- The same child
          component as the basic react example
        </li>
      </RelatedFiles>
    </div>
  );
};

export default BasicHooks;
