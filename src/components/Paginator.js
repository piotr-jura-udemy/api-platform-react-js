import React from "react";
import classNames from "classnames";

export class Paginator extends React.Component {
  constructor(props) {
    super(props);
    const {pageCount} = this.props;

    this.range = [];

    for (let i = 1; i <= pageCount; i++) {
      this.range.push(i);
    }
  }

  render() {
    const {currentPage} = this.props;

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link">
              Previous
            </button>
          </li>

          {
            this.range.map(page => {
              return (
                <li key={page} className={classNames('page-item', {active: currentPage === page})}>
                  <button className="page-link">
                    {page}
                  </button>
                </li>
              );
            })
          }

          <li className="page-item">
            <button className="page-link">
              Next
            </button>
          </li>
        </ul>
      </nav>
    )
  }
}
