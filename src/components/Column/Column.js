import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator';  
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';  

class Column extends React.Component {

  static propTypes = {
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