import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BookDetails from './BookDetails'

import { useQuery } from '@apollo/client'
import { getBooks } from '../graphql-client/queries.js'

export default function BookList() {
  const [bookSelected, setBookSelected] = useState(null)

  const { loading, error, data } = useQuery(getBooks)

  if (loading) return <p>Loading books....</p>
  if (error) return <p>Error loading books!</p>
  return (
    <Row>
      <Col xs={8} className="book-list-de">
        {data.books.map(book => (
          <Card
            border='info'
            text='info'
            className='text-center shadow book-list'
            key={book.id}
            onClick={setBookSelected.bind(this, book.id)}
          >
            <Card.Body>{book.name}</Card.Body>
          </Card>
        ))}
      </Col>
      <Col xs={4}>
        <BookDetails bookId={bookSelected}/>
      </Col>
    </Row>
  )
}
