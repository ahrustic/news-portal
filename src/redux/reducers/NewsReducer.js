import {ActionTypes} from '../constants/ActionTypes';

const initialState = {
    news: []
};

export const newsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_NEWS:
            return {...state, news: payload};
        case ActionTypes.SET_TOP_NEWS:
            const newAricles = [...state.news, ...payload];
            return {...state, news: newAricles};
        default:
            return state;
    };
};

export const selectedArticleReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_ARTICLE:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_ARTICLE:
            return {};
        default:
            return state;
    };
};
