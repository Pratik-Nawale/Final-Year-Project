import React from 'react'
import "./NewsCard.css"


const NewsCard = ({ newsItem }) => {
    // console.log(newsItem);
  
    //2021-01-09T12:15:30Z
    const fulldate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
    var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
    const hour = parseInt(date[4].substring(0, 2)); //
    const time = hour > 12 ? true : false;
  
    return (
      <div className="newsCard">
        <img
          alt={newsItem.title}
          src={
            newsItem.urlToImage
              ? newsItem.urlToImage
              : "../../images/dashboard/news-alternative.avif"
          }
          className="newsImage"
        />
        <div className="newsText">
          <div>
            <span className="news-title">{newsItem.title}</span>
            <br />
            <span className="news-author">
              <a href={newsItem.url} target="__blank">
                <b>short </b>
              </a>{" "}
              <span className="news-muted">
                {" "}
                by {newsItem.author ? newsItem.author : "unknown"} /{" "}
                {time
                  ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                  : `${hour}:${date[4].substring(3, 5)} am`}{" "}
                on {date[2]} {date[1]} {date[3]}, {date[0]}
              </span>
            </span>
          </div>
          <div className="news-lowerNewsText">
            <div className="news-description">{newsItem.description}</div>
            <span className="news-readmore">
              read more at{" "}
              <a href={newsItem.url} target="__blank" className="news-source">
                <b>{newsItem.source.name}</b>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsCard;
  