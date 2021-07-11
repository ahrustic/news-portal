import axios from "axios";

export const getTopNews = async (page) => {
    const response = await axios
        .get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=20&page=${page}&apiKey=f961afdf35bd493c8b2ea8ee05715f4c`)
        .catch((error) => {
            console.log(error);
        });

    if (response.status === 200)
        return response?.data.articles;
    else return [];
}

export const searchArticle = async (term, page) => {
    const response = await axios
        .get(`https://newsapi.org/v2/everything?q=${term}&page=${page}&apiKey=f961afdf35bd493c8b2ea8ee05715f4c`)
        .catch((error) => {
            console.log(error);
        });

    if (response.status === 200)
        return response?.data.articles;
    else return [];
}

export const articleDetail = async (articleTitle) => {
    const response = await axios
        .get(`https://newsapi.org/v2/everything?qInTitle=${decodeURI(articleTitle)}&apiKey=f961afdf35bd493c8b2ea8ee05715f4c`)
        .catch((error) => {
            console.log(error);
        });

    if (response.status === 200)
        return response?.data.articles[0];
    else return [];
}

export const sortArticles = async (term, sortOption) => {
    const response = await axios
        .get(`https://newsapi.org/v2/everything?q=${term}&sortBy=${sortOption}&apiKey=f961afdf35bd493c8b2ea8ee05715f4c`)
        .catch((error) => {
            console.log(error);
        });

    if (response.status === 200)
        return response?.data.articles;
    else return [];
}