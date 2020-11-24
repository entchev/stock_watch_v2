import { combineReducers } from 'redux';
import users from './users_reducer';
import stock from './stock_reducer';
import portfolio_items from './portfolios_reducer';
import watchlist_items from './watchlist_reducer';


const entitiesReducer =  combineReducers({
  stock,
  users,
  portfolio_items,
  watchlist_items
});

export default entitiesReducer;
