import React from 'react';
import styles from './css/animatedbutton.css'

export default class AnimatedButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovering: false,
            text: props.text
        }
    }

    componentDidMount() {
        this.setState({
            hovering: false
        })
    }

    hoverbarAnimate() {
        this.setState({
            hovering: !this.state.hovering
        })
    }

    render() {
        return (
            <div className={styles.button_container} onClick={() => this.props.action(this.state.text)} onMouseEnter={this.hoverbarAnimate.bind(this)} onMouseLeave={this.hoverbarAnimate.bind(this)}>
                {this.state.text}
                <div className={this.state.hovering? styles.hover_bar1 : styles.hover_bar0}></div>
            </div>
        )
    }
}