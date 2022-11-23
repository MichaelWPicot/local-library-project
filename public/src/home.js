function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0].returned === false).length;
}

function getMostCommonGenres(books) {
  const genres = [];
  books.forEach((book) => {
    const genreFind = genres.some((genre) => genre.name === book.genre);

    genreFind
      ? incrementGenreCount(genres, book)
      : genres.push({ name: book.genre, count: 1 });
  });
  return genres
    .sort((genreA, genreB) => genreB.count - genreA.count)
    .slice(0, 5);
}

function incrementGenreCount(genresArr, bookObj) {
  const genreIndex = genresArr.findIndex((genre) => genre.name === bookObj.genre);
  genresArr[genreIndex].count++;
}

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((bookA, bookB) => bookB.count - bookA.count)
    .splice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  return authors
    .map((author) => {
      const authorBorrowCount = books
        .filter((book) => book.authorId === author.id)
        .reduce((total, book) => {
          return total + book.borrows.length;
        }, 0);
      const authorName = `${author.name.first} ${author.name.last}`;
      return { name: authorName, count: authorBorrowCount };
    })
    .sort((bookA, bookB) => bookB.count - bookA.count)
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
