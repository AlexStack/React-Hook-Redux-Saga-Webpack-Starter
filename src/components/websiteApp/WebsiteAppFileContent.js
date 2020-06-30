import React from "react";
import PropTypes from "prop-types";

const WebsiteAppFileContent = ({
  total,
  fileContent,
  handleFieldChange,
  loading,
}) => {
  return (
    <div className="file-content">
      {fileContent}

      <button
        className="btn btn-success m-2"
        name="returnToList"
        onClick={handleFieldChange}
        disabled={loading}
      >
        Return to list
        {loading && <i className="fas fa-spinner fa-spin ml-1"></i>}
      </button>
    </div>
  );
};

WebsiteAppFileContent.propTypes = {
  total: PropTypes.number,
  fileContent: PropTypes.string,
  handleFieldChange: PropTypes.func,
  loading: PropTypes.bool,
};

export default WebsiteAppFileContent;
