import React from "react";
import PropTypes from "prop-types";

const WebsiteAppFileContent = ({
  total,
  fileContent,
  handleFieldChange,
  loading,
}) => {
  return (
    <div className="text-left file-content">
      <button
        className="btn btn-sm btn-outline-info m-2"
        name="returnToList"
        onClick={handleFieldChange}
        disabled={loading}
      >
        Return to list
        {loading && <i className="fas fa-spinner fa-spin ml-1"></i>}
      </button>

      <div
        className="main-content"
        dangerouslySetInnerHTML={{
          __html: fileContent.replace(/(<? *script)/gi, "illegalScript"),
        }}
      />
      <div className="row">
        <div class="col text-right">
          <button
            className="btn btn-sm btn-info m-2"
            name="returnToList"
            onClick={handleFieldChange}
            disabled={loading}
          >
            Return to list
            {loading && <i className="fas fa-spinner fa-spin ml-1"></i>}
          </button>
        </div>
      </div>
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
