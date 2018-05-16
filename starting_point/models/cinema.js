const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {
    return film.title;
  });
};

Cinema.prototype.findFilm = function (filmTitle) {
  return this.films.find((film) => {
    return (film.title === filmTitle);
  });
};

Cinema.prototype.filterBy = function(propertyName, value) {
  return this.films.filter((film) => {
    return (film[propertyName] === value);
  });
}

Cinema.prototype.areAnyFilmsFromYear = function (year) {
  return this.filterBy('year', year).length > 0;
}

Cinema.prototype.areAllTheFilmsOver = function (length) {
  return this.films.every( (film) => {
    return (film.length >= length);
  });
}

Cinema.prototype.calculateTotalRunning = function () {
  const lengthArray = this.films.map((film) => {return (film.length) });
  return lengthArray.reduce((currentFilm, total) => {
    return total + currentFilm;
  });
};

module.exports = Cinema;
