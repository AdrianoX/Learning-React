import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux';

// export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id/*, props.listId*/),  // <---- testing
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    // listId: props.listId, <---- testing
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);

