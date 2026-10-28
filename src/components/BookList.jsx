import React from 'react'
import Book from './Book'

const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        rating: 4.5,
        available: true
    },
    {
        id: 2,
        title: "Dune",
        author: "Frank Herbert",
        rating: 4.8,
        available: true
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        rating: 4.3,
        available: false
    },
    {
        id: 4,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        rating: 4.7,
        available: true
    },
    {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        rating: 4.6,
        available: false
    }
]

const BookList = () => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {
            books.map((book) => (
                <Book key={book.id} book={book} />
            ))
          }

          

        
        </div>
  )
}

export default BookList
