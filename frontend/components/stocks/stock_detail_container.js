import { connect } from 'react-redux';
import StockDetail from './stock_detail';
import { requestSingleStock } from '../../actions/stock_actions';
import { createWatchlistItem } from '../../actions/watchlist_actions'

const mapStateToProps = (state, ownProps) => {
  const stock = state.entities.stock[ownProps.match.params.stockId];

  return {
    stock,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleStock: id => dispatch(requestSingleStock(id)),
  createWatchlistItem: item => dispatch(createWatchlistItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockDetail);
