import React from "react";
import PropTypes from "prop-types";

const RelatedFiles = (props) => {
  return (
    <div className="container-fluid top-container files">
      <div className="card">
        <div className="card-header font-weight-bold">
          Related js files for this example
        </div>
        <ul className="list-group list-group-flush">
          {props.children}

          <li className="list-group-item text-info small">
            You can edit above files to see the changes here immediately
          </li>
        </ul>
      </div>
    </div>
  );
};

// RelatedFiles.propTypes = {};
export default RelatedFiles;
