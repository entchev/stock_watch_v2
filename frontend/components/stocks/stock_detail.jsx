import React from 'react';
import Plot from 'react-plotly.js';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import alpha from '../../util/api'

class StockDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      name: this.props.stock.name,
      symbol: this.props.stock.symbol,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchStock();
    this.props.requestSingleStock(this.props.match.params.stockId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.stockId !== this.props.match.params.stockId) {
      this.props.requestSingleStock(this.props.match.params.stockId);
      this.fetchStock();
    }
  }

  fetchStock() {
    const pointerToThis = this;
    let StockSymbol = this.props.stock.symbol;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${alpha.api_token}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    this.StockSymbol = StockSymbol;

    fetch(API_Call)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }

  handleClick(e) {
    e.preventDefault();

    if (typeof this.props.currentUser === 'undefined') {
      this.props.history.push("/login");
    }

    const watchlist_state = { 
      watchlist_item: {
        stock_id: this.props.stock.id,
        user_id: this.props.currentUser.id,
        name: this.props.stock.name,
        symbol: this.props.stock.symbol
      }
    };

    this.props
      .createWatchlistItem(watchlist_state)
      .then(this.props.history.push("/portfolio_items/"));
  }

  render() {
    const stock = this.props.stock;
    const portfolio_path = `/portfolio_items/new/${this.props.stock.id}`

    if (!stock) return null; 

    return (
      <div>
        <figure>
          <img src={stock.image_url} alt={stock.name} />
        </figure><br />

        <h1>Stock Price in USD (Last 100 days)</h1><br />
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'green' },
            }
          ]}
          layout={{ width: 720, height: 440, title: stock.name }}
        />
        <br/><br/>
        <span className="detail-options">
          <button className="detail-button"><Link to={portfolio_path}>Add to portfolio</Link></button>
          <button className="detail-button" onClick={this.handleClick}>Add to watchlist</button> 
        </span>
        <br/><br/>
        <ul>
          <li className="summary"><b>Company Summary</b></li>
          <li className="summary">{stock.stock_desc}</li>
        </ul>
      </div>
    )
  }
}

export default withRouter(StockDetail);
