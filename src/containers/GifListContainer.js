import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=${process.env.REACT_APP_KEY}`)
        .then(resp => resp.json())
        .then(gifs => { 
            this.setState({
                gifs: gifs.data.splice(0,3)
            })
        })
    }

    submitHandler = (input, event) => {
        event.preventDefault()
        this.setState({gifs: []})
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${process.env.REACT_APP_KEY}`)
        .then(resp => resp.json())
        .then(gifs => { 
            this.setState({
                gifs: gifs.data
            })
        })    
    }

    render() {
        return(
            <div>
                < GifList gifs={this.state.gifs} />
                < GifSearch submitHandler={this.submitHandler} />
            </div>
        )
    }
}

export default GifListContainer