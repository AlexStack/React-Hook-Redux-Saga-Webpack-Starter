import React from "react";
import PropTypes from "prop-types";
import AxiosAppResults from "./AxiosAppResults";

const AxiosAppPresent = ({
  keyword,
  total,
  searchResults,
  handleFieldChange,
  handleSearchSubmit,
  loading
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
              name="keyword"
              className="form-control text-success"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={keyword}
              onChange={handleFieldChange}
            />
            <div className="input-group-append">
              <select onChange={handleFieldChange} name="perPage" className="form-control text-secondary">
                <option value="5">Display Number</option>
                <option value="5">5 results per page</option>
                <option value="10">10 results per page</option>
                <option value="20">20 results per page</option>
                <option value="50">50 results per page</option>
              </select>
            </div>
            <div className="input-group-append">
              <button className="btn btn-success" type="submit" disabled={loading && searchResults.length == 0}>
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

      {loading && searchResults.length == 0 && 
        <div className="text-center text-success">
          <i className="fas fa-spinner fa-spin mr-1"></i>Loading...
        </div>
      }

      {/* Display results */}
      <AxiosAppResults
        total={total}
        searchResults={searchResults}
        handleFieldChange={handleFieldChange}
        loading={loading}
      />
    </div>
  );
};

AxiosAppPresent.propTypes = {
  keyword: PropTypes.string,
  total: PropTypes.number,
  searchResults: PropTypes.array,
  handleFieldChange: PropTypes.func,
  handleSearchSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

export default AxiosAppPresent;
