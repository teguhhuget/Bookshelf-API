const { addBookHandler, getAllBooksHandler, getBooksByIdHandler, editBooksByIdHandler, deleteBooksByIdHandler } = require('./handler')
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getBooksByIdHandler
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editBooksByIdHandler
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteBooksByIdHandler
  }
]

module.exports = routes
