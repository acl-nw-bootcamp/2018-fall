const addPortfoliosToPage = () => {
  const $portfolioList = portfolios.map(portfolio => {
    const $techItems = portfolio.technologies.map(technology => $('<li>').text(technology));
    const $techList = $('<ul>').append($techItems);
    return $('<li>').text(portfolio.name).append($techList);
  });
  $('#portfolios').append($portfolioList);
}
