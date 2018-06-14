import React, { Component } from 'react';
import styles from "./styles.module.css";
import InputTextStore from '../../store/index';

class Form extends Component{
    render(){
      return(
        <form className={styles.main} onSubmit={(e) => { InputTextStore.clickOnsubmit(e) }}>
          <input 
            id="username"
            className={styles.input} 
            placeholder="Username"  />
          <button className={styles.button}>Submit</button>
        </form>
      );
    }
  }
  export default Form;