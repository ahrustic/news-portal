import {ActionTypes} from '../constants/ActionTypes';

export const setNews = (allNews) => {
    return {
        type: ActionTypes.SET_NEWS,
        payload: allNews,
    };
};

export const setTopNews = (allNews) => {
    return {
        type: ActionTypes.SET_TOP_NEWS,
        payload: allNews,
    };
};

export const selectedArticle = (article) => {
    return {
        type: ActionTypes.SELECTED_ARTICLE,
        payload: article,
    };
};

export const removeSelectedArticle = (article) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_ARTICLE,
        payload: article,
    };
};
