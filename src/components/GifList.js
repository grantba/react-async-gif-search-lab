import React, { Component } from 'react'

class GifList extends Component {

    render() {
        return(
            <div>
                <ul>
                    {this.props.gifs.map((name, index) => <li><br></br><img key={index} src={name.images.original.url} alt={name}></img></li>)}
                </ul>
            </div>
        )
    }
}

export default GifList