import React from "react";
import PropTypes from "prop-types";

const AxiosAppResults = ({
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
              <a href={item.repository} target="_blank">
                {item.name}
              </a>
              <div>
                <i className="fas fa-download  text-success mr-1"></i>
                {item.downloads}
              </div>
            </div>
            <div className="col-md text-secondary">{item.description}</div>
          </div>
        ))}
      {total > 0 && total > searchResults.length && (
        <button
          className="btn btn-success m-2"
          name="loadMore"
          onClick={handleFieldChange}
          disabled={loading}
        >
          Load More Data
          {loading && <i className="fas fa-spinner fa-spin ml-1"></i>}
        </button>
      )}
      {/* Show additional information, pages, total */}
      {total === 0 && <div className="text-danger">No result</div>}
      {total > 0 && (
        <div className="text-danger m-3">
          Total results: {total} - Displaying {searchResults.length} of {total}
        </div>
      )}
    </>
  );
};

AxiosAppResults.propTypes = {
  total: PropTypes.number,
  searchResults: PropTypes.array,
  handleFieldChange: PropTypes.func,
  loading: PropTypes.bool,
};

export default AxiosAppResults;
