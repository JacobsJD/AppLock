import React from 'react';
import styles from './css/header.css';
import AnimatedButton from './AnimatedButton.jsx';
import Modal from './Modal.jsx';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollPos: 0,
            user_modal: false,
            modal_type: ''
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.userScrolled.bind(this))
    }

    userScrolled() {
        let scrollPos = window.scrollY > 50? 1 : 0;
        this.setState({
            scrollPos: scrollPos
        })
    }

    modal_trigger(type) {
        this.setState({
            user_modal: !this.state.user_modal,
            modal_type: type
        })
    }

    render() {
        return (
            <div>
                <div className={styles['header-box-'+this.state.scrollPos]}>
                    <div className={styles['product-logo']}>
                    Example Logo
                    </div>

                    <div>
                        < AnimatedButton text={'Log In'} action={this.modal_trigger.bind(this)}/>
                        <br/>
                        < AnimatedButton text={'Sign Up'} action={this.modal_trigger.bind(this)}/>
                        { this.state.user_modal? < Modal modal_trigger={this.modal_trigger.bind(this)} mode={this.state.modal_type} /> : null }
                    </div>


                    <nav className={styles['menu']}>
                        <ul className={styles['parent']}>
                            <li className={styles['menu-item']}></li>
                            <li className={styles['menu-item']}></li>
                        </ul>
                    </nav>

                    
                </div>
            </div>
        )
    }
}