import {isDev} from './helper'
import {useCallback} from "react"

export const API_ENDPOINT = isDev ?
  'https://628725467864d2883e7f38e2.mockapi.io/api/v1' :
  "https://api.nara4aqua.com/api/v1"

export const PDF_URL_BASE = isDev ?
  'http://localhost:3000/pdf' :
  "https://www.nara4aqua.com/pdf"


export function pdffun () {
  const pdfViewPageUrl =  `${PDF_URL_BASE}/pdf/${encodeURIComponent(c?.pdfUrl)}/${c?.page}`
  const openPublication = useCallback(() => navigation.navigate('webModal', {title: p?.title, url: p?.url}))
}
