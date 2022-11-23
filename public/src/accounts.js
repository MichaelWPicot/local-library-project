function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) =>
    accA.name.last > accB.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  // First method catches multiple borrows of the same book for all total borrows occured. Second method that is commented out only finds the number of different books borrows by the account. Both are passing the accounts page test.
  return books
    .map((book) => {
      return book.borrows.filter((borrow) => borrow.id === account.id).length;
    })
    .reduce((total, init) => total + init);
  // return books.filter((book) => {
  //   return book.borrows.some((borrow) => {
  //     return borrow.id === account.id;
  //   });
  // }).length;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => {
    book.author = authors.find((author) => book.authorId === author.id);
    return book.borrows.some((borrow) => {
      return borrow.id === account.id && borrow.returned === false;
    });
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
