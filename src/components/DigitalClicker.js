// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    increaseClicker = () => {
        this.setState({ timesClicked: this.state.timesClicked + 1})
    }

    render() {
        return (
            <div>
                <button onClick={() => this.increaseClicker()}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

