import React from "react";
import PropTypes from "prop-types";

const WWebsiteAppResults = ({
  total,
  searchResults,
  handleFieldChange,
  loading,
}) => {
  return (
    <>
      {searchResults.length > 0 &&
        searchResults.map((item, index) => (
          <div className="row text-left border-bottom p-3" key={index}>
            <div className="col-md">
              <span className="badge badge-secondary">{index + 1}</span>{" "}
              <button
                value={item.path}
                onClick={handleFieldChange}
                name="showDetails"
                className="btn btn-sm"
              >
                {item.name
                  .replace(/-/g, " ")
                  .replace(/.html/g, "")
                  .replace(/(^\d+\.)/, "")}
              </button>
            </div>
          </div>
        ))}
      {total > 0 && total > searchResults.length && (
        <button
          className="btn btn-success m-2"
          name="displayAll"
          onClick={handleFieldChange}
          disabled={loading}
        >
          Display All Data
          {loading && <i className="fas fa-spinner fa-spin ml-1"></i>}
        </button>
      )}

      {/* Show additional information, pages, total */}
      {total === 0 && <div className="text-danger">No result</div>}
      {total > 0 && searchResults.length != total && (
        <div className="text-danger m-3">
          Found {searchResults.length} result
          {searchResults.length > 1 && <>s</>} in {total}
        </div>
      )}
    </>
  );
};

WWebsiteAppResults.propTypes = {
  total: PropTypes.number,
  searchResults: PropTypes.array,
  handleFieldChange: PropTypes.func,
  loading: PropTypes.bool,
};

export default WWebsiteAppResults;
