import { Alert } from 'react-bootstrap'
import React from 'react'

export default () => {
    return (
        <Alert variant="danger">
            Preview горимд байна!
            <Alert.Link href="/api/preview-exit">Энд ларж</Alert.Link> энэ горимоос гарна уу
        </Alert>
    )
}
