import {
  RECEIVE_PORTFOLIO_ITEMS,
} from '../actions/portfolio_actions';

const portfoliosReducer = (state = {}, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_PORTFOLIO_ITEMS:
      return Object.assign({}, state, action.portfolio_items);
    default:
      return state;
  }
};

export default portfoliosReducer;
