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
      keyword: "react",
      searchResults: [],
      total: null,
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount", this.state);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }

  handleFieldChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  // method 1: async await
  handleSearchSubmit = async (event) => {
    event.preventDefault();
    const res = await axiosApi
      .get("/search.json", {
        params: {
          q: this.state.keyword,
          per_page: 5,
        },
      })
      .catch((error) => {
        console.log(error, res);
        return error;
      });

    if (res.data) {
      console.log(res.data);
      this.setState({
        searchResults: res.data.results,
        total: res.data.total,
      });
    }
  };

  // method 2: promise
  handleSearchSubmit2 = (event) => {
    event.preventDefault();
    axiosApi
      .get("/search.json", {
        params: {
          q: this.state.keyword,
          per_page: 4,
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          searchResults: res.data.results,
          total: res.data.total,
        });
      });
  };

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
