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