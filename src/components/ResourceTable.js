import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

class ResourceTable extends Component {
  state = { selected: null };

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);
    this.setState({ offset: offset }, () => {
      this.props.getPaginationData(offset, this.props.perPage);
    });
  };

  handleRowClick = item => {
    if (this.props.getRowOnClickData) {
      this.setState({ selected: item.id });
      this.props.getRowOnClickData(item.id);
    }
  };

  render() {
    let tableRows = null;
    tableRows = this.props.data.map(item => (
      <tr
        key={item.id}
        className={this.state.selected === item.id ? "selected" : undefined}
        onClick={() => {
          this.handleRowClick(item);
        }}
      >
        {this.props.columns.map(col => <td key={col}>{item[col]}</td>)}
      </tr>
    ));

    return (
      <React.Fragment>
        <table>
          <caption>{this.props.caption}</caption>
          <thead>
            <tr>{this.props.columns.map(col => <th key={col}>{col}</th>)}</tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        <div className="center">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={<a href="">...</a>}
            breakClassName={"break-me"}
            pageCount={this.props.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </React.Fragment>
    );
  }
}

ResourceTable.propTypes = {
  caption: PropTypes.string.isRequired,
  perPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  getPaginationData: PropTypes.func.isRequired,
  getRowOnClickData: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ResourceTable;
