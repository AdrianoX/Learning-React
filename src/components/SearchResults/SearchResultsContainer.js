import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearch} from '../../redux/cardsRedux';
//import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  const searchstring = props.match.params.id;

  return { 
    cards: getCardsForSearch(state, searchstring),
  };
};
  

  
export default connect(mapStateToProps)(SearchResults);