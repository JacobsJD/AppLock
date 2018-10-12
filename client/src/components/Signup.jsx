import React from 'react';
import styles from './css/authmodal.css';
import Button from './AnimatedButton.jsx';

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            field_manager: {
                firstname: {
                    warning: false,
                    message: '',
                    text: ''
                },
                lastname: {
                    warning: false,
                    message: '',
                    text: ''
                },
                email: {
                    warning: false,
                    message: '',
                    text: ''
                },
                password: {
                    warning: false,
                    message: '',
                    text: ''
                }
            }
        }
    }

    onValidSignup() {
        // Prevent default?
        // Create a username, email, and password object from state
        // Check if username, email, and password all exist (they should at this point due to previous checks)
            // Run auth's login function that was passed down from props, pass in username, email, and password

            // After promise, use the result of that promise to check
                // If nothing is returned, there was a signup error -- Note: should never get to this point
                // If success, run props.auth's finish authentication using/passing in result.token with the token as an argument
                // Context.router push the profile? (learn what this means)
        // This.props.auth.login()
    }

    userTyped(fieldtype) {
        let management = this.state.field_manager
        management[fieldtype.target.name]['text'] = fieldtype.target.value
        management[fieldtype.target.name]['warning'] = false

        this.setState({
            field_manager: management
        })
    }

    checkSpecialCharacters(text) {
        let textLetters = text.split('')
        let notAllowed = {
            '!': true,
            '@': true,
            '#': true,
            '$': true,
            '%': true,
            '^': true,
            '&': true,
            '*': true,
            '(': true,
            ')': true,
        }
        for (let i = 0; i < textLetters.length; i++) {
            if (notAllowed[textLetters[i]]) {
                return false
            }
        }
        return true
    }

    checkEmail(email) {
        let emailCharacters = email.split('');
        let checkPoints = 0;
        for (let i = 0; i < emailCharacters.length; i++) {
            if (emailCharacters[i] === '@') {
                checkPoints = 1;
            }
            if (checkPoints === 1 && emailCharacters[i] === '.' && emailCharacters[i+1] !== undefined && emailCharacters[i-1] !== '@') {
                checkPoints = 2;
            }
        }
        return (checkPoints === 2)? true : false;
    }

    continue() {
        let management = this.state.field_manager

        if (management['firstname']['text']['length'] < 1) {
            management['firstname']['message'] = 'First name is required'
            management['firstname']['warning'] = true
        } else if (!this.checkSpecialCharacters(management['firstname']['text'])) {
            management['firstname']['message'] = 'No special characters'
            management['firstname']['warning'] = true
        }
        if (management['lastname']['text']['length'] < 1) {
            management['lastname']['message'] = 'Last name is required'
            management['lastname']['warning'] = true
        } else if (!this.checkSpecialCharacters(management['lastname']['text'])) {
            management['lastname']['message'] = 'No special characters'
            management['lastname']['warning'] = true
        }
        if (management['email']['text']['length'] < 1) {
            management['email']['message'] = 'Email is required'
            management['email']['warning'] = true
        } else if (!this.checkEmail(management['email']['text'])) {
            management['email']['message'] = 'Please enter a valid email'
            management['email']['warning'] = true
        }

        if (management['password']['text']['length'] < 1) {
            management['password']['message'] = 'Password is required'
            management['password']['warning'] = true
        } else if (management['password']['text']['length'] < 6) {
            management['password']['message'] = 'Minimum length of 6 characters is required'
            management['password']['warning'] = true
        }
        this.setState({
            field_manager: management
        }, () => {
            if (!this.state.field_manager['firstname']['warning']&&!this.state.field_manager['lastname']['warning']&&!this.state.field_manager['email']['warning']&&!this.state.field_manager['password']['warning']) {
                alert('Registered - No Database')
            }
        })
    }

    render() {
        return (
            <div>
                <div className={styles.form_header}>
                    Sign Up
                </div>

                <div className={styles.half_field_container}>
                    <div className={styles.field_warning_container}>
                        <input className={!this.state.field_manager['firstname']['warning']? styles.field_input_half : styles.field_input_halfW}  name="firstname" type="text" placeholder='First name' onKeyUp={this.userTyped.bind(this)}/>
                        <div className={styles.warning_box_half}>
                        {this.state.field_manager.firstname.warning? <div className={styles.warning}>{this.state.field_manager.firstname.message}</div> : null}
                        </div>
                    </div>

                    <div className={styles.field_warning_container}> 
                        <input className={!this.state.field_manager['lastname']['warning']? styles.field_input_half : styles.field_input_halfW} name="lastname" type="text"  placeholder='Last name' onKeyUp={this.userTyped.bind(this)}/>
                        <div className={styles.warning_box_half}>
                            {this.state.field_manager.lastname.warning? <div className={styles.warning}>{this.state.field_manager.lastname.message}</div> : null}
                        </div>
                    </div>
                </div>

                <div className={styles.field_container}>
                    <input className={!this.state.field_manager['email']['warning']? styles.field_input : styles.field_inputW} name="email" onKeyUp={this.userTyped.bind(this)} placeholder='Email'/>
                    <div className={styles.warning_box}>
                        {this.state.field_manager.email.warning? <div className={styles.warning}>{this.state.field_manager.email.message}</div> : null}
                    </div>
                </div>

                <div className={styles.field_container}>
                    <input type="password" className={!this.state.field_manager['password']['warning']? styles.field_input : styles.field_inputW} name="password" onKeyUp={this.userTyped.bind(this)} placeholder='Password'/>
                    <div className={styles.warning_box}>
                        {this.state.field_manager.password.warning? <div className={styles.warning}>{this.state.field_manager.password.message}</div> : null}
                    </div>
                </div>

                <div className={styles.continuebtn}>
                    < Button text={'Continue'} action={this.continue.bind(this)} />
                </div>

                <div className={styles.or}>
                    <div className={styles.orline}></div>
                    <div className={styles.orword}>or</div>
                    <div className={styles.orline}></div>
                </div>

                <div className={styles.oauth}>
                </div>

                {/* Menu to change to Log in */}
                <div className={styles.form_changer}>
                Already a member?
                    <div className={styles.form_changerbtn} onClick={() => this.props.modeSwitch('Log In')}>Log In</div>
                </div>
            </div>
        )
    }
}