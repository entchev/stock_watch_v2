import {
  RECEIVE_ALL_STOCKS,
  RECEIVE_SINGLE_STOCK
} from '../actions/stock_actions';

const stockReducer = (state = {}, action) => {
  Object.freeze(state);

  let item;

  switch (action.type) {
    case RECEIVE_ALL_STOCKS:
      return Object.assign({}, state, action.stocks);
    case RECEIVE_SINGLE_STOCK:
      item = action.payload.stock; 
      return Object.assign({}, state, { [item.id]: item });
    default:
      return state;
  }
};

export default stockReducer;
