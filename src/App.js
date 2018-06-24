import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import ApiKeyForm from "./components/ApiKeyForm";
import ResourceTable from "./components/ResourceTable";
import {
  initApi,
  fetchEncodings,
  setEncodingId,
  fetchStreams,
  fetchMuxings,
  clearEncodings,
  clearStreams,
  clearMuxings
} from "./actions";

const ENCODINGS_PER_PAGE = 10;
const STREAMS_PER_PAGE = 5;
const MUXINGS_PER_PAGE = 5;

class App extends Component {
  setApiKey = apiKey => {
    this.props.dispatch(initApi(apiKey));
    this.props.dispatch(clearEncodings());
    this.props.dispatch(clearStreams());
    this.props.dispatch(clearMuxings());
    this.getEncodings();
  };

  getEncodings = (offset = 0, limit = ENCODINGS_PER_PAGE) => {
    this.props.dispatch(fetchEncodings(offset, limit));
  };

  getStreamsAndMuxings = encodingId => {
    this.props.dispatch(setEncodingId(encodingId));
    this.getStreams(encodingId)();
    this.getMuxings(encodingId)();
  };

  getStreams = () => {
    return (offset = 0, limit = STREAMS_PER_PAGE) => {
      this.props.dispatch(fetchStreams(offset, limit));
    };
  };

  getMuxings = () => {
    return (offset = 0, limit = MUXINGS_PER_PAGE) => {
      this.props.dispatch(fetchMuxings(offset, limit));
    };
  };

  render() {
    return (
      <div className="App">
        <ApiKeyForm handleSubmit={this.setApiKey} />
        {this.props.encodings && (
          <React.Fragment>
            <ResourceTable
              caption="Encodings"
              data={this.props.encodings}
              columns={["name", "id", "createdAt", "modifiedAt"]}
              getPaginationData={this.getEncodings}
              getRowOnClickData={this.getStreamsAndMuxings}
              pageCount={this.props.encodingsPageCount}
              perPage={ENCODINGS_PER_PAGE}
            />
            <div className="center">
              Click on an encoding to show the corresponding streams and muxings
            </div>
          </React.Fragment>
        )}
        {this.props.streams && (
          <ResourceTable
            caption="Streams"
            data={this.props.streams}
            columns={["id", "createdAt", "modifiedAt"]}
            getPaginationData={this.getStreams()}
            pageCount={this.props.streamsPageCount}
            perPage={STREAMS_PER_PAGE}
          />
        )}
        {this.props.muxings && (
          <ResourceTable
            caption="Muxings"
            data={this.props.muxings}
            columns={["id", "type", "segmentLength", "segmentsMuxed"]}
            getPaginationData={this.getMuxings()}
            pageCount={this.props.muxingsPageCount}
            perPage={MUXINGS_PER_PAGE}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    encodings: state.encodings.items,
    encodingsPageCount: Math.ceil(
      state.encodings.totalCount / ENCODINGS_PER_PAGE
    ),
    streams: state.streams.items,
    streamsPageCount: Math.ceil(state.streams.totalCount / STREAMS_PER_PAGE),
    muxings: state.muxings.items,
    muxingsPageCount: Math.ceil(state.muxings.totalCount / MUXINGS_PER_PAGE)
  };
};

export default connect(mapStateToProps)(App);
