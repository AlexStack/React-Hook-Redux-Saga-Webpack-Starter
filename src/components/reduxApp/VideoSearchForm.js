import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { REDUXPATH, lastPath, myLog } from "../../constants/config";

const VideoSearchForm = ({
  keyword,
  keywordHistory,
  searchResults,
  handleFieldChange,
  handleSearchSubmit,
  loading,
}) => {
  const showSearchForm =
    lastPath() == REDUXPATH.SearchVideos || lastPath() == "/" ? true : false;
  // myLog(lastPath(), showSearchForm);
  return (
    <div className="mt-1 mb-1 pt-5 pb-5 pl-4 text-dark">
      {showSearchForm ? (
        <form onSubmit={handleSearchSubmit}>
          <div className="text-primary mb-3">
            <h2>Redux Video Search Example!</h2>
            <div className="text-secondary">
              Redux Video search example: An video search and like APP using
              react-redux-saga API search
            </div>
          </div>
          <div className="text-success">
            <div className="input-group">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
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
              {/* <div className="input-group-append">
                <select
                  onChange={handleFieldChange}
                  name="perPage"
                  className="form-control text-secondary"
                >
                  <option value="5">Display Number</option>
                  <option value="5">5 results per page</option>
                  <option value="10">10 results per page</option>
                  <option value="20">20 results per page</option>
                  <option value="50">50 results per page</option>
                </select>
              </div> */}
              <div className="input-group-append">
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={loading && searchResults.length == 0}
                >
                  <i className="fas fa-search mr-1"></i>Search
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="text-info mb-3">
          <h2>Redux User Dashboard Example</h2>
          <div className="text-secondary">
            This is the user dashboard example
          </div>
        </div>
      )}

      <div className="row mt-1">
        <div className="col-md text-truncate keyword-history-buttons">
          {showSearchForm &&
            keywordHistory.length > 0 &&
            keywordHistory.map((k, index) => {
              if (k != keyword) {
                return (
                  <button
                    className="btn btn-light btn-sm mr-1 mb-1"
                    key={index}
                    value={k}
                    name="keywordHistory"
                    onClick={handleFieldChange}
                  >
                    {k}
                  </button>
                );
              }
            })}
        </div>

        <div className="col-md-auto text-right redux-buttons">
          {!showSearchForm && (
            <NavLink
              className="btn btn-sm btn-success ml-2 mb-1"
              name="view-liked-videos"
              to={REDUXPATH.SearchVideos}
            >
              <i className="fas fa-search mr-1"></i>Search Videos
            </NavLink>
          )}

          <NavLink
            className="btn btn-sm btn-info ml-2 mb-1"
            name="view-liked-videos"
            to={REDUXPATH.LikedVideos}
          >
            <i className="fas fa-thumbs-up mr-1"></i>My Liked Videos
          </NavLink>

          <NavLink
            className="btn btn-sm btn-secondary ml-2 mb-1"
            name="view-played-videos"
            to={REDUXPATH.PlayedVideos}
          >
            <i className="fas fa-video mr-1"></i>Recently Played Videos
          </NavLink>
        </div>

        {loading && searchResults.length == 0 && (
          <div className="col-md-12 text-center text-success m-3">
            <i className="fas fa-spinner fa-spin mr-1"></i>Loading ......
          </div>
        )}
      </div>
    </div>
  );
};

VideoSearchForm.propTypes = {
  keyword: PropTypes.string,
  keywordHistory: PropTypes.array,
  searchResults: PropTypes.array,
  handleFieldChange: PropTypes.func,
  handleSearchSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

export default VideoSearchForm;
