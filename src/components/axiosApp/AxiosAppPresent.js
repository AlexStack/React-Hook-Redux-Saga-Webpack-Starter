import React from "react";
import PropTypes from "prop-types";
import AxiosAppResults from "./AxiosAppResults";

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
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Keyword
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={keyword}
              onChange={handleFieldChange}
            />
            <div className="input-group-append">
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Display results */}
      <AxiosAppResults total={total} searchResults={searchResults} />
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
