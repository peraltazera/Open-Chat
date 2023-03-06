import { useState } from 'react'
import './Body.css'
import Card from './CardChat'

const cards = [
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  ]

function Body() {
  return (
    <div className="Body">
        {cards.map((card, id) => <Card key={id} num={card.num} author={card.author} status={card.status} date={card.date}/>)}
    </div>
  )
}

export default Body
