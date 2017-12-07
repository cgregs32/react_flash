import React from 'react'


class FlashCards extends React.Component {
  render () {
    let cards = this.props.items.map(card => {
      return (<li>{card.question}</li>);
    });
    return (
      <ul>
      {cards}
      </ul>
    );
  }

}

export default FlashCards;
