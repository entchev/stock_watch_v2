import { connect } from 'react-redux'
import requestAllStocks from "../../actions/stock_actions";
import selectAllStocks from "../../reducers/selectors";
import StockIndex from './stock_index';


const mapStateToProps = state => ({
  stock: selectAllStocks(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllStocks: () => dispatch(requestAllStocks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockIndex);
