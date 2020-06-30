import React from "react";
import PropTypes from "prop-types";
import VideoPreview from "./videoPreview";
import VideoPlay from "./videoPlay";

const VideoSearchResults = ({
  total,
  searchResults,
  likedItems,
  handleFieldChange,
  loading,
  playVideoId,
}) => {
  return (
    <div className="row">
      {searchResults.length > 0 &&
        searchResults.map((item, index) => {
          const likedItem = likedItems.find(
            (obj) => obj.id.videoId == item.id.videoId
          );
          const wasLiked = likedItem ? true : false;
          return (
            <div className="col-md-6 mb-2" key={index}>
              {playVideoId !== item.id.videoId ? (
                <VideoPreview
                  item={item}
                  handleFieldChange={handleFieldChange}
                  index={index}
                  wasLiked={wasLiked}
                />
              ) : (
                <VideoPlay
                  item={item}
                  handleFieldChange={handleFieldChange}
                  index={index}
                  wasLiked={wasLiked}
                />
              )}
            </div>
          );
        })}

      {total > 0 && total > searchResults.length && searchResults.length > 0 && (
        <div className="col-md text-center">
          <button
            className="btn btn-success m-2"
            name="loadMore"
            onClick={handleFieldChange}
            disabled={loading}
          >
            <i className="fas fa-download mr-1"></i>Load More Data
            {loading && <i className="fas fa-spinner fa-spin ml-1"></i>}
          </button>
        </div>
      )}
      {/* Show additional information, pages, total */}
      {total === 0 && (
        <div className="col-md text-danger text-center">
          <i className="fas fa-exclamation-triangle mr-2"></i>No result
        </div>
      )}
      {total > 0 && (
        <div className="col-md-12 text-success m-3">
          <i className="fas fa-photo-video mr-2"></i>Displaying{" "}
          {searchResults.length} of {total} Videos
        </div>
      )}
    </div>
  );
};

VideoSearchResults.propTypes = {
  total: PropTypes.number,
  searchResults: PropTypes.array,
  likedItems: PropTypes.array,
  handleFieldChange: PropTypes.func,
  loading: PropTypes.bool,
  playVideoId: PropTypes.string,
};

export default VideoSearchResults;
