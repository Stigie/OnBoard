import logo from '../../assets/logo.svg';
import React, { Component } from 'react';
import styles from "./styles.module.css";
import InputTextStore from '../../store/index';
import { observer } from 'mobx-react';

const Header = observer(() => (
        <header className={styles.cover}>
          <img src = {logo}/>
        <h1 className={styles.h1}>Welcome on board, &#123;{InputTextStore.getInputText}&#125;!</h1>
        </header>
       ) 
  )
  export default Header;
