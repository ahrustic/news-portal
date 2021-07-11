import {combineReducers} from "redux";
import {newsReducer, selectedArticleReducer} from "./NewsReducer";

const reducers = combineReducers({
   allNews: newsReducer,
   article: selectedArticleReducer,
});

export default reducers;