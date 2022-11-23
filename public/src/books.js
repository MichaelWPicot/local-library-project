function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  return [
    books.filter((book) => book.borrows[0].returned === false),
    books.filter((book) => book.borrows[0].returned === true),
  ];
}

function getBorrowersForBook(book, accounts) {
  return accounts
    .filter((account) => {
      return book.borrows.some((borrow) => borrow.id === account.id);
    })
    .map((account) => {
      const returnStatus = book.borrows.find(
        (borrow) => borrow.id === account.id
      );
      return { ...account, returned: returnStatus.returned };
    })
    .slice(0, 10);
}
// return books.filter((book) => {
//     book.author = authors.find((author) => book.authorId === author.id);
//     return book.borrows.some((borrow) => {
//       return borrow.id === account.id && borrow.returned === false;
//     });
//   });
// }
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
