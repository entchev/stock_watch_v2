import React, { Component } from 'react';
import StockIndexItem from './stock_index_item'
 
class StockIndex extends Component {
  componentDidMount() {
    this.props.requestAllStocks();
  }

  render() {
    const stock = this.props.stock;

    return (
      <section className="stock-index">
        <ul>
          {stock.map(ele => <StockIndexItem key={ele.id} stock={ele} />)}
        </ul>
      </section>
    );
  }
}

export default StockIndex;
