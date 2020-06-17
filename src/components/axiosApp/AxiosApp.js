/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import axiosApi from "../../api/axiosApi";
import AxiosAppPresent from "./AxiosAppPresent";
import FooterPresent from "../footer/FooterPresent";

export default class AxiosApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "react api",
      searchResults: [],
      page: 1,
      perPage: 5,
      total: null,
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    // console.log("componentDidMount", this.state);
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate", this.state);
  }

  handleFieldChange = (event) => {
    if (event.target.name == "keyword") {
      this.setState({
        keyword: event.target.value,
      });
    } else if (event.target.name == "perPage") {
      this.setState({
        perPage: event.target.value,
      });
    } else if (event.target.name == "loadMore") {
      const pageNumber = this.state.page + 1;
      this.getApiResult(pageNumber);
    }

    console.log(this.state);
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.getApiResult(1);
  };

  async getApiResult(pageNumber) {
    const res = await axiosApi
      .get("/search.json", {
        params: {
          q: this.state.keyword,
          per_page: this.state.perPage,
          page: pageNumber,
        },
      })
      .catch((error) => {
        console.log(error, res);
        return error;
      });

    if (res.data) {
      console.log(res.data);
      if (pageNumber > 1) {
        this.setState({
          searchResults: [...this.state.searchResults, ...res.data.results],
          total: res.data.total,
          loadMore: false,
          page: pageNumber,
        });
      } else {
        this.setState({
          searchResults: res.data.results,
          total: res.data.total,
          loadMore: false,
          page: 1,
        });
      }
    }
    return res;
  }

  render() {
    return (
      <div className="text-center text-danger">
        <AxiosAppPresent
          keyword={this.state.keyword}
          total={this.state.total}
          searchResults={this.state.searchResults}
          handleFieldChange={this.handleFieldChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <FooterPresent />
      </div>
    );
  }
}
