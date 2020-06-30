/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import allActions from "../../reduxStores/actions/allActions";
import VideoSearchForm from "./videoSearchForm";
import VideoSearchResults from "./videoSearchResults";

class ReduxAllVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "funny",
      searchResults: [],
      total: null,
      playVideoId: null,
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.videos.keywords.length > 0) {
      this.setState({
        keyword: this.props.videos.keywords[0],
      });
    }
    console.log("componentDidMount", this.state);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }

  handleFieldChange = (event) => {
    if (event.target.name == "keyword") {
      this.setState({
        keyword: event.target.value.trim(),
      });
    } else if (event.target.name == "playVideo") {
      const item = this.props.videos.allItems[
        event.target.getAttribute("data-index")
      ];
      this.setState({
        playVideoId: item.id.videoId,
      });
      this.props.dispatch(allActions.viewItemRequest(item));
    } else if (event.target.name == "like") {
      this.props.dispatch(
        allActions.likeItemRequest(
          this.props.videos.allItems[event.target.getAttribute("data-index")]
        )
      );
    } else if (event.target.name == "unlike") {
      this.props.dispatch(
        allActions.unlikeItemRequest(
          this.props.videos.allItems[event.target.getAttribute("data-index")]
        )
      );
    } else if (event.target.name == "keywordHistory") {
      this.setState({
        keyword: event.target.value,
        searchResults: [],
        total: null,
      });
      this.startSearch(event.target.value);
    } else if (event.target.name == "loadMore") {
      this.startSearch(
        this.state.keyword,
        this.props.videos.extraInfo.nextPageToken
      );
    }

    console.log(event.target.getAttribute("data-index"));
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchResults: [],
      total: null,
    });

    this.startSearch(this.state.keyword);
  };

  startSearch = (keyword, nextPageToken) => {
    this.props.dispatch(allActions.listItemRequest(keyword, nextPageToken));
  };

  render() {
    return (
      <div className="text-center">
        <VideoSearchForm
          keyword={this.state.keyword}
          keywordHistory={this.props.videos.keywords}
          searchResults={this.props.videos.allItems}
          handleFieldChange={this.handleFieldChange}
          handleSearchSubmit={this.handleSearchSubmit}
          loading={this.props.videos.extraInfo.loading}
        />

        {this.props.videos.extraInfo.errorMsg && (
          <div className="text-danger mb-5">
            {this.props.videos.extraInfo.errorMsg}
          </div>
        )}

        <VideoSearchResults
          total={this.props.videos.extraInfo.totalResults}
          searchResults={this.props.videos.allItems}
          likedItems={this.props.videos.likedItems}
          handleFieldChange={this.handleFieldChange}
          loading={this.props.videos.extraInfo.loading}
          playVideoId={this.state.playVideoId}
        />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // console.log("mapStateToProps ", reduxState);
  return reduxState;
};

ReduxAllVideos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(ReduxAllVideos);
