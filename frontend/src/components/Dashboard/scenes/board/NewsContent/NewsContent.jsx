import Container from '@mui/material/Container';
import React from 'react'
import "./NewsContent.css"
import NewsCard from '../NewsCard/NewsCard'

const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
    return (
      <Container >
        <div className="news-content">
            <h1>News Feed</h1>
          {/* <div className="downloadMessage">
            <span className="downloadText">
              For the best experience use inshorts app on your smartphone
            </span>
            <img
              alt="app store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
            />
            <img
              alt="play store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
            />
          </div> */}
  
          {/* First this */}
          {newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} />
          ))}
  
          {/* Then this */}
          {loadMore <= newsResults && (
            <>
              <hr />
              <button
                className="news-loadMore"
                onClick={() => setLoadMore(loadMore + 20)}
              >
                Load More
              </button>
            </>
          )}
        </div>
      </Container>
    );
  };
  
  export default NewsContent;
  