import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { REDUXPATH, lastPath } from "../../constants/config";

const VideoPlayButtons = ({
  isPlaying,
  wasLiked,
  handleFieldChange,
  index,
}) => {
  return (
    <div>
      {!isPlaying && (
        <button
          className="btn btn-sm btn-primary mr-2 mb-1"
          name="playVideo"
          data-index={index}
          onClick={handleFieldChange}
        >
          <i className="fas fa-play mr-1"></i>Play Video
        </button>
      )}

      {wasLiked ? (
        <>
          {lastPath() != REDUXPATH.LikedVideos && (
            <Link
              className="btn btn-sm btn-info mr-2 mb-1"
              name="view-liked-videos"
              to={REDUXPATH.LikedVideos}
            >
              <i className="fas fa-video mr-1"></i>All Liked Videos
            </Link>
          )}

          <button
            className="btn btn-sm btn-success mb-1"
            name="unlike"
            data-index={index}
            onClick={handleFieldChange}
          >
            <i className="far fa-thumbs-up mr-1"></i>Unlike
          </button>
        </>
      ) : (
        <button
          className="btn btn-sm btn-secondary mb-1"
          name="like"
          data-index={index}
          onClick={handleFieldChange}
        >
          <i className="fas fa-thumbs-up mr-1"></i>Like This Video
        </button>
      )}
    </div>
  );
};

VideoPlayButtons.propTypes = {
  isPlaying: PropTypes.bool,
  wasLiked: PropTypes.bool,
  handleFieldChange: PropTypes.func,
  index: PropTypes.number,
};

export default VideoPlayButtons;
