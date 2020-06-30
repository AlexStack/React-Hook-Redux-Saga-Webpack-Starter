/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { githubContentsApi } from "../../constants/axiosApi";
import WebsiteAppPresent from "./WebsiteAppPresent";
import RelatedFiles from "../footer/RelatedFiles";
import { Base64 } from "js-base64";

export default class WebsiteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "react api",
      searchResults: [],
      page: 1,
      fileContent: null,
      total: null,
      loading: false,
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount", this.state);
    this.getApiResult(".");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }

  handleFieldChange = (event) => {
    if (event.target.name == "keyword") {
      this.setState({
        keyword: event.target.value,
      });
    } else if (event.target.name == "showDetails") {
      event.preventDefault();
      this.setState({
        loading: true,
      });
      this.getApiResult(event.target.value);
    } else if (event.target.name == "returnToList") {
      event.preventDefault();
      this.setState({
        fileContent: null,
      });
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
    this.getApiResult(".");
  };

  async getApiResult(fileName) {
    const results = await githubContentsApi
      .get("/" + fileName, {
        params: {
          ref: "master",
        },
      })
      .catch((error) => {
        console.log(error, results);
        this.setState({
          loading: false,
        });
      });

    if (results.data) {
      if (results.data.type) {
        console.log(Base64.decode(results.data.content));
        this.setState({
          fileContent: Base64.decode(results.data.content),
          loading: false,
        });
      } else {
        this.setState({
          searchResults: results.data,
          total: null,
          loading: false,
        });
      }
    }
    return results;
  }

  filterResults = () => {
    let newResults = this.state.searchResults.filter(
      (item) => item.type == "file" && item.name.indexOf(".html") != -1
    );
    return newResults;
  };

  render() {
    return (
      <div className="text-center">
        <WebsiteAppPresent
          keyword={this.state.keyword}
          total={this.state.total}
          searchResults={this.filterResults()}
          fileContent={this.state.fileContent}
          handleFieldChange={this.handleFieldChange}
          handleSearchSubmit={this.handleSearchSubmit}
          loading={this.state.loading}
        />

        <RelatedFiles>
          <li className="list-group-item">
            src/components/WebsiteApp/*.js --- React Components
          </li>
          <li className="list-group-item">
            src/api/AxiosApi.js --- Axios common settings
          </li>
        </RelatedFiles>
      </div>
    );
  }
}
