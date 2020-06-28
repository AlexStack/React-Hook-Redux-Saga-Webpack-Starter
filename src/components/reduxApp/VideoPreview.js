import React from "react";
import PropTypes from "prop-types";
import VideoButtons from "./videoButtons";

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
          <span className="badge badge-secondary">{index + 1}</span>{" "}
          {item.snippet.title}
        </h5>
        <VideoButtons
          isPlaying={false}
          wasLiked={wasLiked}
          handleFieldChange={handleFieldChange}
          index={index}
        />
        {/* <p className="card-text">{item.snippet.description}</p> */}
        {/* <button
          className="btn btn-primary"
          name="playVideo"
          id={item.id.videoId}
          data-index={index}
          onClick={handleFieldChange}
        >
          <i className="fas fa-play mr-1"></i>Play Video
        </button> */}
      </div>
    </div>
  );
};

VideoPreview.propTypes = {
  item: PropTypes.object,
  handleFieldChange: PropTypes.func,
};

export default VideoPreview;
