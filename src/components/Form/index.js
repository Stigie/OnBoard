import React, { Component } from 'react';
import styles from "./styles.module.css";

class Form extends Component{

    render(){
      return(
        <form className={styles.main}>
          <input 
            className={styles.input} 
            placeholder="Username"  />
          <button className={styles.button}>Submit</button>
        </form>
      );
    }
  }
  export default Form;