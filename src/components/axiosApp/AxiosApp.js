/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import packagistApi from "../../constants/axiosApi";
import AxiosAppPresent from "./AxiosAppPresent";
import RelatedFiles from "../footer/RelatedFiles";

export default class AxiosApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "react api",
      searchResults: [],
      page: 1,
      perPage: 5,
      total: null,
      loading: false,
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
      this.setState({
        loading: true,
      });
      this.getApiResult(pageNumber);
    }

    console.log(this.state);
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchResults: [],
      total: null,
      loading: true,
    });
    this.getApiResult(1);
  };

  async getApiResult(pageNumber) {
    const res = await packagistApi
      .get("/search.json", {
        params: {
          q: this.state.keyword,
          per_page: this.state.perPage,
          page: pageNumber,
        },
      })
      .catch((error) => {
        console.log(error, res);
        this.setState({
          loading: false,
        });
      });

    if (res.data) {
      console.log(res.data);
      if (pageNumber > 1) {
        this.setState({
          searchResults: [...this.state.searchResults, ...res.data.results],
          total: res.data.total,
          loading: false,
          page: pageNumber,
        });
      } else {
        this.setState({
          searchResults: res.data.results,
          total: res.data.total,
          loading: false,
          page: 1,
        });
      }
    }
    return res;
  }

  render() {
    return (
      <div className="text-center">
        <AxiosAppPresent
          keyword={this.state.keyword}
          total={this.state.total}
          searchResults={this.state.searchResults}
          handleFieldChange={this.handleFieldChange}
          handleSearchSubmit={this.handleSearchSubmit}
          loading={this.state.loading}
        />

        <RelatedFiles>
          <li className="list-group-item">
            src/components/AxiosApp/*.js --- React Components
          </li>
          <li className="list-group-item">
            src/api/AxiosApi.js --- Axios common settings
          </li>
        </RelatedFiles>
      </div>
    );
  }
}
