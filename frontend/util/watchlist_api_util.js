export const fetchWatchlistItems = data => (
  $.ajax({
    method: 'GET',
    url: 'api/watchlist_items/',
    data
  })
);

export const createWatchlistItem = portfolioItem => (
  $.ajax({
    method: 'POST',
    url: 'api/watchlist_items',
    data: portfolioItem
  })
);
