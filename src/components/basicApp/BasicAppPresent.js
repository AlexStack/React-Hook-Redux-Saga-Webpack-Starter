import React from "react";
import PropTypes from "prop-types";

const BasicAppPresent = ({
  clickTimes,
  keyPressTimes,
  pressedKey,
  secretKey,
  handleFieldChange,
}) => {
  return (
    <div className="mt-1 mb-5 pt-5 pb-5 pl-4 text-dark">
      <div className="text-primary mb-3">
        <h2>Secret key guess game!</h2>
        <div className="text-secondary">
          Basic ReactJS example: using React state and components only
        </div>
        <div className="text-danger m-3">
          {secretKey
            ? "Secret key pressed, Game start now!"
            : "First person: Press a secret key first!"}
        </div>

        <div className="text-success">
          Second person: Try to guess what is the secret key by press other keys
        </div>
      </div>
      {secretKey === pressedKey && (
        <>
          <h3 className="text-danger">Congratulation, you won!</h3>
          <div className="text-success">
            You've tried {keyPressTimes} times, your score is{" "}
            {100 - (keyPressTimes - 1) * 2}/100
          </div>
          Press Esc key to start the game again! or
          <br />
          <button
            onClick={handleFieldChange}
            className="btn btn-success mt-3  btn-sm"
          >
            Click here to restart
          </button>
        </>
      )}
      {secretKey && secretKey !== pressedKey && (
        <div>
          Pressed Key: <span className="text-danger mr-3">{pressedKey}</span>
          Key Press Times: <span className="text-danger">{keyPressTimes}</span>
          <button
            onClick={handleFieldChange}
            className="btn btn-secondary btn-sm ml-3"
          >
            Click here to restart
          </button>
        </div>
      )}
    </div>
  );
};

BasicAppPresent.propTypes = {
  clickTimes: PropTypes.number,
  keyPressTimes: PropTypes.number,
  pressedKey: PropTypes.string,
  secretKey: PropTypes.string,
  handleFieldChange: PropTypes.func,
};
export default BasicAppPresent;
