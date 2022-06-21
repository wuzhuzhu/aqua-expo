import React from 'react'
import Pdf from '@mikecousins/react-pdf';
import {useParams} from 'react-router-dom'

export default function () {
  const isDev = process.env.NODE_ENV === 'development'
  const {encodedUri, page} = useParams()
  const url = decodeURIComponent(encodedUri)

  return <div>
    {isDev && <ul>
      <h2>123</h2>
      <li>{url}</li>
      <li>{page}</li>
    </ul>}
    <Pdf file={url} page={page} style={{width: '100%', height: '100%'}} />
  </div>
}


