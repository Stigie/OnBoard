import React, { Component } from 'react';
import styles from "./styles.module.css";
import Form from '../Form/index'
import Header from '../Header/index'


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
      <div className={styles.cover}>
        <Header/>
      </div>  
        <Form/>
      </div>
    );
  }
}

export default App;
