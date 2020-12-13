import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';

class DogIndex extends Component {
    constructor() {
        super();

        this.state = {
            dogImageURL: ''
        }

        this.refreshImage = this.refreshImage.bind(this);

        this.refreshImage();
    }

    refreshImage() {
        //Handle getting a new dog picture.

        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dogImageURL: data.message
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <img alt="" src={this.state.dogImageURL}></img>
                <br />
                <Button onClick={this.refreshImage}>Get New Dog Image</Button>
            </div>
        )
    }
}

export default DogIndex