import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BookForm from './BookForm.js'
import AuthorForm from './AuthorForm'

const Forms = () => {
	return (
		<Row>
			<Col className="form-book-at">
				<BookForm />
			</Col>
			<Col className="form-book-at">
				<AuthorForm />
			</Col>
		</Row>
	)
}

export default Forms