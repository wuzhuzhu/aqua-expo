import React from 'react'
import './demo.css'



export default function () {
  return <div>
    <div className="list">
      <div className="item" style={{order: 10}}>5</div>
      <div className="item" style={{order: 2}}>1</div>
      <div className="item" style={{order: 4}}>2</div>
      <div className="item" style={{order: 6}}>3</div>
      <div className="item" style={{order: 8}}>4</div>
    </div>
  </div>
}
