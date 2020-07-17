import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import BasicAppPresent from "../basicApp/BasicAppPresent";
import RelatedFiles from "../footer/RelatedFiles";

const BasicHooks = () => {
  const [clickTimes, setClickTimes] = useState(0);
  const [keyPressTimes, setKeyPressTimes] = useState(0);
  const [pressedKey, setPressedKey] = useState("null");
  const [secretKey, setSecretKey] = useState(null);

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

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [secretKey, pressedKey]);

  return (
    <div className="text-center">
      <BasicAppPresent
        clickTimes={clickTimes}
        keyPressTimes={keyPressTimes}
        pressedKey={pressedKey}
        secretKey={secretKey}
        handleFieldChange={handleFieldChange}
      />

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
