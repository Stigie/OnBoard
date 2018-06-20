import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import styles from "./styles.module.css";
import Form from '../Form/index'
import Header from '../Header/index'
import InputTextStore from '../../store/index';


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.cover}>
          <Provider InputTextStore={InputTextStore}> 
            <Header/>
          </Provider>  
        </div> 
        <Provider InputTextStore={InputTextStore}> 
          <Form/>
        </Provider>
      </div>
    );
  }
}

export default App;
