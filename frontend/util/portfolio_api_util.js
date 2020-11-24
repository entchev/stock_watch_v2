export const fetchPortfolioItems = data => (
  $.ajax({
    method: 'GET',
    url: 'api/portfolio_items/',
    data
  })
);

export const createPortfolioItem = portfolioForm => (
  $.ajax({
    method: 'POST',
    url: 'api/portfolio_items',
    data: portfolioForm,
    contentType: false,
    processData: false
  })
);
