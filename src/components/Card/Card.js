import React from "react";
import styles from "./Card.scss";
import PropTypes from "prop-types";
// import Creator from '../Creator/Creator.js';  <-- probably not useful 

class Card extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <section className={styles.component}>
        <span>{this.props.title}</span>
      </section>
    );
  }
}
export default Card;
