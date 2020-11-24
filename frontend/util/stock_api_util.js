export const fetchAllStocks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/stocks'
  })
);

export const fetchSingleStock = id => (
  $.ajax({
    method: 'GET',
    url: `api/stocks/${id}`
  })
);
