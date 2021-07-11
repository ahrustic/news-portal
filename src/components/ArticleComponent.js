import React from "react";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {Link} from 'react-router-dom';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";

import '../assets/css/articleComponent.css';
import noPhoto from '../assets/img/nophoto.png';

const ArticleComponent = (article) => {
    const {title, description, urlToImage} = article.article;

    return(
        <GridList cellHeight={180} className={'gridList'}>
            <GridListTile key={title} className={'root'}>
                <Card className={'card'}>
                    <CardMedia
                        className={'media'}
                        image={urlToImage ? urlToImage : noPhoto}
                        title={title}
                    />
                    <div className={'cardOverlay'}>
                        <CardContent className={'cardHeader'}>
                            <svg className={"cardArc"} xmlns="http://www.w3.org/2000/svg">
                                <path/>
                            </svg>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                        </CardContent>
                        <Typography className={'cardDescription'} variant="body2" color="textSecondary" component="div">
                            <p dangerouslySetInnerHTML={{__html: description}} />
                        </Typography>
                        <CardActions className={'cardDescription'}>
                            <Link className={'readArticleBtn'} to={`/article/${encodeURI(title)}`}>
                                <Button className={'readArticleBtn'}> READ FULL ARTICLE </Button>
                            </Link>
                        </CardActions>
                    </div>
                </Card>
            </GridListTile>
        </GridList>
    );
};

export default ArticleComponent;
