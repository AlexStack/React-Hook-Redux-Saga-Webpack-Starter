import React from "react";
import PropTypes from "prop-types";
import VideoPlayButtons from "./VideoPlayButtons";

const VideoPreview = ({ item, handleFieldChange, index, wasLiked }) => {
  return (
    <div className="card">
      <img
        src={item.snippet.thumbnails.high.url}
        className="card-img-top btn p-0"
        name="playVideo"
        id={item.id.videoId}
        data-index={index}
        onClick={handleFieldChange}
      />

      <div className="card-body p-2">
        <h5 className="card-title">
          <span className="badge badge-secondary mr-1">{index + 1}</span>
          {item.snippet.title}
        </h5>
        <VideoPlayButtons
          isPlaying={false}
          wasLiked={wasLiked}
          handleFieldChange={handleFieldChange}
          index={index}
        />
      </div>
    </div>
  );
};

VideoPreview.propTypes = {
  item: PropTypes.object,
  handleFieldChange: PropTypes.func,
};

export default VideoPreview;
