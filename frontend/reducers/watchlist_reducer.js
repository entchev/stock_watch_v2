import {
  RECEIVE_WATCHLIST_ITEMS,
} from '../actions/watchlist_actions';

const watchlistReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_WATCHLIST_ITEMS:
      return Object.assign({}, state, action.watchlist_items);
    default:
      return state;
  }
};

export default watchlistReducer;
