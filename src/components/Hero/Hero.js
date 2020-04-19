import React from 'react';
import styles from './Hero.scss';
import PropTypes from "prop-types";
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator.js';  <-- probably not useful 


  
const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        <img className={styles.image} src={props.image}/>
    </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
  };

export default Hero;