import React from 'react';
import styles from './css/authmodal.css';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className={styles.form_header}>
                    Log In
                </div>

                <div className={styles.form_changer}>
                    Don't have an account?
                    <div className={styles.form_changerbtn} onClick={() => this.props.modeSwitch('Sign Up')}>Sign Up</div>
                </div>
            </div>
        )
    }
}