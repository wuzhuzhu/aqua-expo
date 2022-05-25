import {isDev} from './helper'
import {useCallback} from "react"

export const API_ENDPOINT = isDev ?
  'https://628725467864d2883e7f38e2.mockapi.io/api/v1' :
  "https://api.nara4aqua.com/api/v1"

export const PDF_URL_BASE = isDev ?
  'http://localhost:3000' :
  "https://www.nara4aqua.com"

