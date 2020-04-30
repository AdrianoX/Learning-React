import {connect} from 'react-redux';
import {getCardsForSearch} from '../../redux/cardsRedux.js';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';
import SearchResults from './SearchResults.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),   //  <------   match.params.id       ??
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults); 