import {Row, Text} from "native-base"
import React, {memo} from "react"
import {PublicationType} from "../../types"

const PublicationCard = function ({p}: {p: PublicationType}) {
  return <Row>
    <Text>{p.title}</Text>
    <Text>{p.author}</Text>
    <Text>{p.title}</Text>
    <Text>{p.imgUrl}</Text>
    <Text>{p.pdfUrl}</Text>
  </Row>
}

export default memo(PublicationCard)
