import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setNews, setTopNews} from "../redux/actions/NewsActions";
import ArticleComponent from "./ArticleComponent";
import Search from "./Search";
import {getTopNews, searchArticle, sortArticles} from "../services/services";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import Loader from "./Loader";

import '../assets/css/newsList.css';

const NewsList = () => {
    const news = useSelector((state) => state.allNews?.news);
    const dispatch = useDispatch();
    const [loadMoreBtn, setLoadMoreBtn] = useState(true);

    const fetchNews = async () => {
        setLoadMoreBtn(true);
        if (news) {
            const topNews = await getTopNews(Math.ceil(news.length/20)+1);
            if (topNews && !topNews.length) setLoadMoreBtn(false);
            else dispatch(setTopNews(topNews));
        }
    }

    const [searchTerm, setSearchTerm] = useState('');

    const search = async (term) => {
        setSearchTerm(term);
        setLoadMoreBtn(true);
        if (term.length === 0) {
            const topNews = await getTopNews();
            dispatch(setNews(topNews));
            setSearchTerm('');
        }
        else {
            const searchNews = await searchArticle(term, 1);
            dispatch(setNews(searchNews));
        }
    }

    const [sortOption, setSortOption] = useState('relevancy');

    const handleChange = async (event) => {
        setSortOption(event.target.value);
        const searchNews = await sortArticles(searchTerm, event.target.value);
        dispatch(setNews(searchNews));
    };

    const loadAction = async () => {
        if (searchTerm === '') fetchNews();
        else {
            const searchNews = await searchArticle(searchTerm, Math.ceil(news.length/20)+1);
            if (searchNews && !searchNews.length) setLoadMoreBtn(false);
            else dispatch(setTopNews(searchNews));
        }
    }

    return(
        <div>
            <div className='searchDiv'>
                <Search search={search} searchTerm={searchTerm} loadMoreBtn={loadMoreBtn}/>
            </div>

            {searchTerm && searchTerm.length !== 0 &&
            <div className={'sortElements'}>
                <FormControl>
                    <InputLabel id="sortNews">Sort</InputLabel>
                    <Select
                        labelId="sortNews"
                        id="selectSort"
                        value={sortOption}
                        onChange={handleChange}
                    >
                        <MenuItem value={'popularity'}>Popularity</MenuItem>
                        <MenuItem value={'relevancy'}>Relevancy</MenuItem>
                        <MenuItem value={'publishedAt'}>Published at</MenuItem>
                    </Select>
                </FormControl>
                <Button className={'btn'} onClick={() => {
                    search('');
                }}>Back to Top Articles</Button>
            </div>
            }

            {news && news.length === 0 && <Loader/>}
            <div className='newsList'>
                {news && news.map((article, index) => {
                    return (
                        <ArticleComponent key={index} article={article}/>
                    );
                })}
            </div>
            {loadMoreBtn && news && news.length !== 0 &&
                <div className={'loadBtnDiv'} >
                    <Button className={'btn'} onClick={loadAction}>Load more</Button>
                </div>
            }
        </div>
    );
};

export default NewsList;
