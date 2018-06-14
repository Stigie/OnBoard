import logo from '../../assets/logo.svg';
import React, { Component } from 'react';
import styles from "./styles.module.css";

class Header extends Component{
    render(){
      let msg = this.props.inputText;
      if (msg ===""){
        msg = "username"
      }
      return(
        <header className={styles.cover}>
          <img src = {logo}/>
        <h1 className={styles.h1}>Welcome on board, &#123;username&#125;!</h1>
        </header>
      );
    }
  }

  export default Header;
