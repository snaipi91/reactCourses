import React from 'react'

const customPromise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.spacexdata.com/v1/vehicles')
    xhr.onload = () => {
        (xhr.status === 200) ? resolve(xhr.response) : reject(xhr.statusText)
    }

    xhr.send()
})

export default class List extends React.Component {
    constructor() {
        super()
        this.state = { listItems: []}
    }

    componentDidMount() {
        customPromise
            .then((response) => {
                this.setState({
                    listItems: JSON.parse(response).map((item, index) => <li id={item.id} key={index}> {(item.description) ? item.description : 'null'} </li>)
                })
            })
            .catch((err) => {
                this.setState({
                    listItems: err
                })
            })
    }

    render() {
        return (
            <div id="list">
                <h3>List:</h3>
                <ul>
                    {this.state.listItems}
                </ul>
            </div>
        )
    }
}