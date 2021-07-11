import React, {useEffect} from "react";
import {useParams} from "react-router";
import {selectedArticle, removeSelectedArticle} from "../redux/actions/NewsActions";
import {useDispatch, useSelector} from "react-redux";
import {articleDetail} from "../services/services";
import Loader from "./Loader";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

import '../assets/css/articleDetail.css';
import noPhoto from "../assets/img/nophoto.png";

const ArticleDetail = () => {
    const {articleTitle} = useParams();
    const article = useSelector((state) => state.article);
    const {source, title, description, urlToImage, author, content } = article;
    const [publishedDate, setPublishDate] = React.useState('');
    const dispatch = useDispatch();

    const fetchArticleDetail = async () => {
        const article = await articleDetail(articleTitle);
        dispatch(selectedArticle(article));

        if(article?.publishedAt) {
            const date = new Date(article.publishedAt);
            setPublishDate(`${date.toDateString()} ${date.getHours()}:${date.getMinutes() === 0 ? '00' : date.getMinutes()}`)
        }
    }

    useEffect(() => {
        if (articleTitle) fetchArticleDetail();
        return () => {
            dispatch(removeSelectedArticle());
        }
    }, [])

    window.scrollTo(0, 0);

    return(
        <>
            <div className={'backDiv'}>
                <Link to={`/`}>
                    <Button  className={'backBtn'}> BACK </Button>
                </Link>
            </div>
            <div className={'detailWrapper'}>
                <div className={'detailDiv'}>
                    {Object.keys(article).length === 0 && <Loader/>}
                    <div className={'imageDiv'} >
                        <img src={urlToImage ? urlToImage : noPhoto} className={'image'} alt={title}/>
                    </div>
                    <div className={'content'}>
                        <h1 className={'title'}>{title}</h1>
                        <div className={'authorDiv'}>
                            {author && <h4 className={'info'}>Author: {author}</h4>}
                            {source?.name && <h4 className={'info'}>Source: {source?.name}</h4>}
                            {publishedDate && <h4 className={'info'}>Published at: {publishedDate}</h4>}
                        </div>
                        <div className={'separator'}/>
                    </div>
                </div>
                {description && <p dangerouslySetInnerHTML={{__html: description}} className={'description'}/>}
                {content &&  <p className={'description'}>{content}</p>}
            </div>
        </>
    );
};

export default ArticleDetail;
