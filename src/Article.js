import React from 'react'

class Input extends React.Component {
  constructor() {
    super()
    this.state = { tip: 'stranger'}
  }

  handlerLogin = (event) => {
    this.setState({
      tip: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input onKeyDown={this.handlerLogin} placeholder="What is you name?"/>
        <div>Hello, {this.state.tip}</div>
      </div>
    ) 
  }
}

class Article extends React.Component {
  render() {
    const {title, desc, author} = this.props.news
    return (
      <article>
        <h1>{title}</h1>
        <div>{desc}</div>
        <div>{author}</div>
      </article>
    )
  }
}

export {
  Input,
  Article
}