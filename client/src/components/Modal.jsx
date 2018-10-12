import React from 'react';
import styles from './css/authmodal.css'
import Login from './Login.jsx';
import Signup from './Signup.jsx';

export default class AuthModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: props.mode,
            filling: false
        }
    }

    fillingSwitch() {
        this.setState({
            filling: !this.state.filling
        })
    }

    modeSwitch(newMode) {
        this.setState({
            mode: newMode
        })
    }

    render() {
        return (
            <div className={styles.authmodal_container} onClick={() => !this.state.filling? this.props.modal_trigger('') : null}>
                <div className={styles.form} onMouseEnter={this.fillingSwitch.bind(this)} onMouseLeave={this.fillingSwitch.bind(this)}>

                    { this.state.mode === 'Log In'? < Login modeSwitch={this.modeSwitch.bind(this)} /> : < Signup modeSwitch={this.modeSwitch.bind(this)}/> }

                </div>
            </div>
        )
    }
}