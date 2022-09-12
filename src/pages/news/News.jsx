import React, { useEffect, useState } from "react";
import moment from 'moment';
import "./news.scss";

function News() {
  const [news, setNews] = useState([]);

    const getNews = () => {
      fetch(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bc57630cdf1f4983af82c9e02d24300e"
      )
        .then((response) => response.json())
        .then((data) => setNews(data.articles))
        .catch((err) => console.log(err.message));
    };

    useEffect(() => {
      getNews();
    }, []);

  return (
    <div className="container">
      <h1>News-App</h1>
      <div className="news-container">
        {news.length >= 1 ? (
          news.map((data, index) => (
            <>
            {data.urlToImage !== null ? 
            <div>
              <img
                src={data.urlToImage}
                alt={"news-image"}
                className="news-image"
              />
              <h2 className="news-title">{data.title}</h2>
              <span className="news-description">{data.description}</span>
              <p className="news-date">{moment(data.publishedAt).fromNow()}</p>
              <div className="news-hr"/>
            </div>
            : null
}
            </>
          ))
        ) : (
          <p>data are not found</p>
        )}
      </div>
    </div>
  );
}

export default News;