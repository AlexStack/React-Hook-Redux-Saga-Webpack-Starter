import React from "react";
import PropTypes from "prop-types";

const AxiosAppResults = ({ total, searchResults }) => {
  return (
    <>
      {searchResults.length > 0 &&
        searchResults.map((item) => (
          <div className="row text-left border-bottom p-3" key={item.name}>
            <div className="col-md">
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

      {/* Show additional information, pages, total */}
      {total === 0 && <div className="text-danger">No result</div>}
      {total > 0 && (
        <div className="text-danger m-3">Total results: {total}</div>
      )}
    </>
  );
};

AxiosAppResults.propTypes = {
  total: PropTypes.number,
  searchResults: PropTypes.array,
};

export default AxiosAppResults;
