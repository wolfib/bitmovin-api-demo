import React, { Component } from "react";
import PropTypes from "prop-types";

class ApiKeyForm extends Component {
  state = { apiKey: "0175190e-744d-416c-84e2-ce1ff84c857d" };

  handleChange = event => {
    this.setState({ apiKey: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.apiKey);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="formRow">
            <label>Enter API Key: </label>
            <input
              type="text"
              value={this.state.apiKey}
              onChange={this.handleChange}
              name="apiKey"
              size="40"
            />
          </div>
          <div className="formRow">
            <button className="btn">Load Encodings</button>
          </div>
        </form>
      </div>
    );
  }
}

ApiKeyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default ApiKeyForm;
