import {
  ADD_ITEM,
  VOTE_ITEM,
  FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR
} from '../actions/actionTypes';

const items = (state = [], action) => {
  let newState = state;
  switch (action.type) {

    case FETCH_ITEMS:
      break;
    case FETCH_ITEMS_SUCCESS:
      newState = action.response.data.map((d) => {
        return {
          id: d.id,
          text: d.text,
          cardType: d.cardType,
        };
      });
      break;
    case FETCH_ITEMS_ERROR:
      newState = [];
      break;

    case ADD_ITEM:
      const { text, cardType } = action;
      const newId = state.length;
      newState = [ ...state, { id: newId, text, cardType, vote: 0 } ];
      break;

    case VOTE_ITEM:
      const { id: voteId } = action;
      newState = state.map((item) => {
        return item.id === voteId
          ? { ...item, vote: item.vote + 1 }
          : { ...item };
      });
      break;

    default:
      break;
  }

  return newState.sort((a, b) => {
    return b.vote - a.vote;
  });
};

export default items;