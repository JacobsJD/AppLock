import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import styles from './components/css/index.css';

class Application extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className={styles['app-background']}>
                < Header/>
                <div className={styles['useless-block']}>
                </div>
            </div>
        )
    }
}

ReactDOM.render(< Application/>, document.getElementById('app'))