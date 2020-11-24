import * as APIUtil from '../util/watchlist_api_util';
export const RECEIVE_WATCHLIST_ITEMS = 'RECEIVE_WATCHLIST_ITEMS';
export const RECEIVE_WATCHLIST_ITEM = 'RECEIVE_WATCHLIST_ITEM';

export const receiveWatchlistItems = watchlist_items => ({
  type: RECEIVE_WATCHLIST_ITEMS,
  watchlist_items,
});

export const receiveWatchlistItem = watchlist_item => ({
  type: RECEIVE_WATCHLIST_ITEM,
  watchlist_item,
});

export const requestWatchlistItems = () => (dispatch) => {
  return APIUtil.fetchWatchlistItems()
    .then(watchlist_items => { dispatch(receiveWatchlistItems(watchlist_items)) });
}

export const createWatchlistItem = watchlist_item => dispatch => (
  APIUtil.createWatchlistItem(watchlist_item).then(watchlist_item => (
    dispatch(receiveWatchlistItem(watchlist_item))
  ))
);
