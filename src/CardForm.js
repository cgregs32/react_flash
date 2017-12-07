import React from 'react'


class CardForm extends React.Component{
  state={question: "", answer: "", nextId: 1}

  handleClick = (e) => {
    e.preventDefault();
    const {question, answer, nextId} = this.state
    const card = {question, answer, id: nextId}
    this.setState({question: "", answer: "", nextId: nextId + 1})
    this.props.addCard(card)
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({ [name]: value})
    // this.setState({ question: e.target.value})
  }

  render(){
    const {question, answer} = this.state

    return (
      <form onSubmit={this.handleClick}>
        <input name="question" value={question} onChange={this.handleChange} placeholder="Question"/>
        <input name="answer" value={answer} onChange={this.handleChange} placeholder="Answer"/>
        <button type="submit">Add New Card</button>
      </form>
    )
  }
}

export default CardForm
