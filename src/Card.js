import React from 'react';

class Card extends React.Component{
  state = {show: true, flipped: []}

  toggleShow = (id) => {
    // let cards = this.state.items.map(card => {
    //   if (card.id === id)
    const {show, flipped} = this.state
    this.setState({ show: !this.state.show, flipped: [id] })
  }

  whatToShow = (what) => {
  }

  render(){
    let cards = this.props.items.map(card => {
      const cardId = card.id
      if (this.state.show){
        return (
          <div key={cardId}>
            <h1>{card.question}</h1>
            <button onClick={this.toggleShow(cardId)}>Flip</button>
          </div>
        );

      }else{
        return (
          <div  key={cardId}>
            <h1>{card.answer}</h1>
            <button onClick={this.toggleShow(cardId)}>Flip</button>
          </div>
        );
      }
    });
    return (
      <div>
        {cards}
      </div>
    )
  }
}

export default Card;
