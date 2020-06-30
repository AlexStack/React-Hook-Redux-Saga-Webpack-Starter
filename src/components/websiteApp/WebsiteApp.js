/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  githubContentsApi,
  githubRawFile,
  githubRepository,
} from "../../constants/axiosApi";
import WebsiteAppPresent from "./WebsiteAppPresent";
import RelatedFiles from "../footer/RelatedFiles";
import { Base64 } from "js-base64";

export default class WebsiteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
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
    this.getRawFileContent(githubRepository.configFile);
    this.listAllFiles();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }

  handleFieldChange = (event) => {
    if (event.target.name == "keyword") {
      this.setState({
        keyword: event.target.value.trim(),
      });
    } else if (event.target.name == "showDetails") {
      event.preventDefault();
      this.setState({
        loading: true,
      });
      // this.getApiResult(event.target.value);
      this.getRawFileContent(event.target.value);
    } else if (event.target.name == "returnToList") {
      event.preventDefault();
      this.setState({
        fileContent: null,
      });
    } else if (event.target.name == "displayAll") {
      event.preventDefault();
      this.setState({
        keyword: "",
      });
    }

    console.log(this.state);
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!this.state.keyword && this.state.searchResults.length == 0) {
      this.setState({
        searchResults: [],
        total: null,
        loading: true,
        fileContent: null,
      });
      this.listAllFiles();
    } else if (this.state.fileContent) {
      this.setState({
        fileContent: null,
      });
    } else {
      console.log("do nothing");
    }
  };

  listAllFiles = (dir = githubRepository.initDirectory) => {
    this.getApiResult(dir);
  };

  async getApiResult(fileName) {
    const results = await githubContentsApi
      .get("/" + fileName, {
        params: {
          ref: githubRepository.branch,
        },
      })
      .catch((error) => {
        // console.log(error, error.response);
        this.setState({
          loading: false,
          fileContent:
            githubRepository.axiosErrorMsg +
            "<div class='text-danger'>" +
            error.response.data.message +
            "</div>",
        });
      });

    if (results.data) {
      if (results.data.type) {
        // console.log(Base64.decode(results.data.content));
        this.setState({
          fileContent: Base64.decode(results.data.content),
          loading: false,
        });
      } else {
        this.setState({
          searchResults: results.data,
          total: results.data.length,
          loading: false,
        });
      }
    }
    return results;
  }

  async getRawFileContent(fileName) {
    const results = await githubRawFile.get("/" + fileName).catch((error) => {
      // console.log(error, error.response);
      this.setState({
        loading: false,
        fileContent:
          githubRepository.axiosErrorMsg +
          "<div class='text-danger'>" +
          error.response.data.message +
          "</div>",
      });
    });

    if (results.data) {
      if (fileName.indexOf(githubRepository.configFile) != -1) {
        console.log(results);
        return true;
      }
      const fileContent =
        results.data.trim().indexOf("<div ") === 0
          ? results.data
          : githubRepository.wrongFormatMsg;
      this.setState({
        fileContent: fileContent,
        loading: false,
      });
    }
    // console.log(results);
    return results;
  }

  filterResults = () => {
    let newResults = this.state.searchResults.filter(
      (item) => item.type == "file" && item.name.indexOf(".html") != -1
    );
    if (this.state.keyword) {
      newResults = newResults.filter(
        (item) =>
          item.name
            .toLowerCase()
            .replace(/-/g, " ")
            .indexOf(this.state.keyword.toLowerCase()) != -1
      );
    }

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
