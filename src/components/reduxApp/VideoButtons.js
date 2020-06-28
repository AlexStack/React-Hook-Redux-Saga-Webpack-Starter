import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VideoButtons = ({ isPlaying, wasLiked, handleFieldChange, index }) => {
  return (
    <div>
      {!isPlaying && (
        <button
          className="btn btn-sm btn-primary mr-2"
          name="playVideo"
          data-index={index}
          onClick={handleFieldChange}
        >
          <i className="fas fa-play mr-1"></i>Play Video
        </button>
      )}

      {wasLiked ? (
        <>
          <Link
            className="btn btn-sm btn-info mr-2"
            name="view-liked-videos"
            to="/LikedVideos"
          >
            <i className="fas fa-video mr-1"></i>All Liked Videos
          </Link>

          <button
            className="btn btn-sm btn-success"
            name="unlike"
            data-index={index}
            onClick={handleFieldChange}
          >
            <i className="far fa-thumbs-up mr-1"></i>Unlike
          </button>
        </>
      ) : (
        <button
          className="btn btn-sm btn-secondary"
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

VideoButtons.propTypes = {
  isPlaying: PropTypes.bool,
  wasLiked: PropTypes.bool,
  handleFieldChange: PropTypes.func,
  index: PropTypes.number,
};

export default VideoButtons;
