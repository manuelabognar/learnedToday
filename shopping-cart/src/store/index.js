import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [],
};

function items(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, data: [...state.data, action.title] };
    case 'INCREMENT_QTY':
      return state;
    case 'DELETE_ITEM':
      const index = state.data.findIndex(x => x.id === action.title.id);
      state.data.splice(index, 1);
      return state;
    default:
      return state;
  }
}

const store = createStore(items);

export default store;