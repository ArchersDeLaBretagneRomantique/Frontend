import {ADD_ARTICLE, DELETE_ARTICLE} from '../constants/ActionTypes';

export function addArticle(title, content) {
	return { type: ADD_ARTICLE, title, content };
}

export function deleteArtcile(rk) {
	return { type: DELETE_ARTICLE, rk };
}
