import React from 'react'
import ReactDOM from 'react-dom'
import {Input, Article} from './Article.js'
import List from './List'
import registerServiceWorker from './registerServiceWorker'

const News = {
  title: 'Как сделать выборку из MongoDB!?',
  desc: 'Подскажите пожалуйста, как возможно выбрать все response_* (название и количество может меняться динамически), у которых заданы "source" и "url".',
  author: 'MongoDB'
}

console.log(News)

class App extends React.Component {
  render() {
    return (
      <div>
        <Input/>
        <Article news={News}/>
        <List/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))  
registerServiceWorker();
