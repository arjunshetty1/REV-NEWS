import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "../Components/NewsCard";

const NewsBoard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsapi = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=8ce03905afad4655bc69ed73da7e4a05"
        );
        setNews(response.data.articles);
      } catch (error) {
        console.log("Error Occurred, Check Back After Sometimes");
      }
    };

    newsapi();
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col mt-[6.5rem] gap-6 mx-6 md:mx-0 md:flex md:flex-row md:flex-wrap md:max-w-screen md:ml-6 md:gap-16 mb-10">
          {news.map((article, index) => {
            return (
              <div key={index}>
                <NewsCard article={article} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsBoard;
