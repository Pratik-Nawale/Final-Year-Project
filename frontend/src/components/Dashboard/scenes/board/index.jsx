// import { Box } from "@mui/material";
import React from "react";
// import Header from "../../comp/Header";
import NewsContent from "./NewsContent/NewsContent";
import axios from "axios";
import { useEffect, useState } from "react";
import "./board.css";

const News = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  // console.log(process.env);

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=sports`
      );
      // console.log(news);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, loadMore]);

  return (
    <div className=" p-4">
      <div className="d-flex justify-content-between align-items-center gap-3">
      {/* <h2 className="mb-4 title">News Feed</h2> */}
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      </div>
    </div>
  );
};

export default News;
