import React from 'react'
import Card from './Card';
import CardForm from './CardForm'
import FlashCards from './FlashCards'

class CardApp extends React.Component{
  state = {items: []}
  

  addCard = (card) => {
    this.setState({items: [...this.state.items, card]})
  }

  render(){
    return(
      <div>
        <CardForm addCard={this.addCard}/>
        <Card items={this.state.items} />
      </div>
    )
  }
}

export default CardApp
