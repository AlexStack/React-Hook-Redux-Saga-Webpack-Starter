/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import allActions from "../../reduxStores/actions/allActions";
import VideoSearchForm from "./videoSearchForm";
import VideoSearchResults from "./videoSearchResults";

class ReduxLikedVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "funny",
      searchResults: [],
      page: 1,
      perPage: 5,
      total: null,
      loading: false,
      playVideoId: null,
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // console.log("componentDidMount", this.state);
    // this.props.dispatch(allActions.listItemRequest(this.state.keyword));
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate", this.state);
  }

  handleFieldChange = (event) => {
    if (event.target.name == "keyword") {
      this.setState({
        keyword: event.target.value,
      });
    } else if (event.target.name == "playVideo") {
      const item = this.props.videos.likedItems[
        event.target.getAttribute("data-index")
      ];
      this.setState({
        playVideoId: item.id.videoId,
      });
      this.props.dispatch(allActions.viewItemRequest(item));
    } else if (event.target.name == "like") {
      this.props.dispatch(
        allActions.likeItemRequest(
          this.props.videos.likedItems[event.target.getAttribute("data-index")]
        )
      );
    } else if (event.target.name == "unlike") {
      this.props.dispatch(
        allActions.unlikeItemRequest(
          this.props.videos.likedItems[event.target.getAttribute("data-index")]
        )
      );
    } else if (event.target.name == "perPage") {
      this.setState({
        perPage: event.target.value,
      });
    }

    // console.log(event.target.getAttribute("data-index"));
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchResults: [],
      total: null,
      loading: true,
    });
    this.props.dispatch(allActions.listItemRequest(this.state.keyword));
  };

  render() {
    return (
      <div className="text-center">
        <VideoSearchForm
          keyword={this.state.keyword}
          keywordHistory={this.props.videos.keywords}
          searchResults={this.props.videos.likedItems}
          handleFieldChange={this.handleFieldChange}
          handleSearchSubmit={this.handleSearchSubmit}
          loading={this.state.loading}
        />

        <VideoSearchResults
          total={this.props.videos.likedItems.length}
          searchResults={this.props.videos.likedItems}
          likedItems={this.props.videos.likedItems}
          handleFieldChange={this.handleFieldChange}
          loading={this.state.loading}
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

ReduxLikedVideos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(ReduxLikedVideos);
