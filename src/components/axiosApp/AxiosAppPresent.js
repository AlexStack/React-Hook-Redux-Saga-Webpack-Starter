import React from "react";
import PropTypes from "prop-types";

const AxiosAppPresent = ({
  keyword,
  total,
  searchResults,
  handleFieldChange,
  handleSearchSubmit,
}) => {
  return (
    <div className="mt-1 mb-5 pt-5 pb-5 pl-4 text-dark">
      <div className="text-primary mb-3">
        <h2>Axios RESTful API search example!</h2>
        <div className="text-secondary">
          Axios RESTful API search example: A form using axios to implement a
          RESTful API search
        </div>
      </div>

      <form onSubmit={handleSearchSubmit}>
        <div className="text-success">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Keyword
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={keyword}
              onChange={handleFieldChange}
            />
            <div class="input-group-append">
              <button class="btn btn-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Display results */}
      {searchResults.length > 0 &&
        searchResults.map((item) => (
          <div className="row text-left border-bottom p-3">
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
    </div>
  );
};

AxiosAppPresent.propTypes = {
  keyword: PropTypes.string,
  total: PropTypes.number,
  searchResults: PropTypes.array,
  handleFieldChange: PropTypes.function,
  handleSearchSubmit: PropTypes.function,
};

export default AxiosAppPresent;
