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




// import {connect} from 'react-redux';
// import {getCardsForSearch} from '../../redux/cardsRedux.js';
// import {createAction_changeSearchString} from '../../redux/searchStringRedux';
// import SearchResults from './SearchResults.js';


// const mapStateToProps = (state, props) => ({
//   cards: getCardsForSearch(state, props.match.params.id),   //  <------   match.params.id       ??
//   lists: state.lists,
// });

// const mapDispatchToProps = (dispatch) => ({
//   changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);     <---- damaged ?