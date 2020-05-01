import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

const SearchResults = ({ cards }) => {
  return (
    <Container>
      <section className={styles.component} >
        <div className={styles.cards}>
          {cards.map(cardData => (
            <div key={cardData.id} className={styles.wrapper}>
              <Card key={cardData.id} {...cardData} />
              <Link className={styles.link} to={`/list/${cardData.listId}`}>
                <p>Search results here</p>
              </Link>
            </div>
          ))}
        </div>
      </section >
    </Container>
  );
};

SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;




// import React from 'react';
// import styles from './SearchResults.scss';
// import PropTypes from 'prop-types';
// import Card from '../Card/Card';
// import Container from '../Container/Container';
// import ListLink from '../ListLink/ListLink';

// class SearchResults extends React.Component {
//   static propTypes = {
//     cards: PropTypes.array,
//     lists: PropTypes.array,
//     columns: PropTypes.array,
//   };

//   render() {
//     const { cards, lists } = this.props;
//     return (
//       <Container>
//         <section className={styles.component}>
//           <h2 className={styles.title}>Your search results</h2>
//           {cards.map(cardData => (
//             <Card key={cardData.id} {...cardData} />
//           ))}
//         </section>

//         {lists.map(list => (
//           <ListLink key={list.id} {...list} />
//         ))}
//       </Container>
//     );
//   }
// }

// export default SearchResults;         <---- wrong code scheme/plan ?