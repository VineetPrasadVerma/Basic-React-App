import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/BookReducer'
// import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localBooks = window.localStorage.getItem('books')
    return localBooks ? JSON.parse(localBooks) : []
  })

  useEffect(() => {
    window.localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
