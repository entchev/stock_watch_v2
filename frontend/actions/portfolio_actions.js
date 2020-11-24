import * as APIUtil from '../util/portfolio_api_util';
export const RECEIVE_PORTFOLIO_ITEMS = 'RECEIVE_PORTFOLIO_ITEMS';
export const RECEIVE_PORTFOLIO_ITEM = 'RECEIVE_PORTFOLIO_ITEM';

export const receivePortfolioItems = portfolio_items => ({
  type: RECEIVE_PORTFOLIO_ITEMS,
  portfolio_items,
});

export const receivePortfolioItem = portfolio_item => ({
  type: RECEIVE_PORTFOLIO_ITEM,
  portfolio_item,
});

export const requestPortfolioItems = () => (dispatch) => {
  return APIUtil.fetchPortfolioItems()
    .then(portfolio_items => { dispatch(receivePortfolioItems(portfolio_items)) });
  }

export const createPortfolioItem = portfolio_item => dispatch => (
  APIUtil.createPortfolioItem(portfolio_item).then(portfolio_item => (
    dispatch(receivePortfolioItem(portfolio_item))
  ))
);
