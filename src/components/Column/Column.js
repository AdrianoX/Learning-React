import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator';   /* import Creator from '../Creator/Creator.js'; */
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';   /*import Icon from '../Icon/Icon.js'; */
// import ReactHtmlParser from 'react-html-parser';


class Column extends React.Component {

  //   state = {
  //     cards: this.props.cards || [],
  //   }
  static propTypes = {
    // cardTitle: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,   
    name: PropTypes.node,
    title: PropTypes.node.isRequired,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  

  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} /> 
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div> 
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;

