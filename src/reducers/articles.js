import {ADD_ARTICLE, DELETE_ARTICLE} from '../constants/ActionTypes';

const initialState = [];

export default function articles(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          content: action.content
        }];
    case DELETE_ARTICLE:
      return [
        ...state.slice(0, action.rk),
        ...state.slice(action.rk + 1)
      ];
    default:
      return state;
  }
}
