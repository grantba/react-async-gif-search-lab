import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
        input: ""
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.submitHandler(this.state.input, event)
        this.setState({input: ""})
    }

    render() {
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>
                        Enter a Search Term:
                        <br></br><input onChange={event => this.handleInput(event)} type="text" name="search" id="search-form" value={this.state.input} />
                    </label>
                        <br></br><input type="submit" value="Find GIFs" />                
                </form>
            </div>
        )
    }
}

export default GifSearch

