import React from "react";
import PropTypes from "prop-types";
import VideoButtons from "./videoButtons";

const VideoPlay = ({ item, handleFieldChange, index, wasLiked }) => {
  return (
    <div className="card">
      <div className="embed-responsive embed-responsive-4by3">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${item.id.videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="card-body p-2">
        <h5 className="card-title">
          <span className="badge badge-secondary">{index + 1}</span>{" "}
          {item.snippet.title}
        </h5>

        <VideoButtons
          isPlaying={true}
          wasLiked={wasLiked}
          handleFieldChange={handleFieldChange}
          index={index}
        />
      </div>
    </div>
  );
};

VideoPlay.propTypes = {
  item: PropTypes.object,
  handleFieldChange: PropTypes.func,
};

export default VideoPlay;
