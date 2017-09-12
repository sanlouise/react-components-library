import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor() {
    super();
    this.state = {
      currentPage: 1,
      itemsPerPage: 5
    };
  }

  onPageNumberClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { data } = this.props;
    const { currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item, index) => {
      return <li key={index}>{item}</li>;
    });


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.onPageNumberClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="sl-pagination">
        <ul>
          {renderItems}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default Pagination;
