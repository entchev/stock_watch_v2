import { connect } from 'react-redux'
import { requestPortfolioItems } from '../../actions/portfolio_actions';
import { requestWatchlistItems } from '../../actions/watchlist_actions';
import Portfolio from './portfolio';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestPortfolioItems: () => dispatch(requestPortfolioItems()),
  requestWatchlistItems: () => dispatch(requestWatchlistItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
