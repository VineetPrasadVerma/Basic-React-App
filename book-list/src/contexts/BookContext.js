import React, { createContext, useState } from 'react'
// import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Wings of Fire', author: 'APJ Abdul Kalam', id: 1 },
    { title: 'Eloquent Javascript', author: 'Marjin Haverbeke', id: 2 },
    { title: 'Two States', author: 'Chetan Bhagat', id: 3 }
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: Math.random }])
  }

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
