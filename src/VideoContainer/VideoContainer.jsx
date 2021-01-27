import React, { useState, useEffect } from "react";
import  VideoCard from "./VideoCard/VideoCard";
import "./VideoContainer.scss";
import { instance as axios, trendingUrl, channelUrl } from "../util";

// const API_KEY = "AIzaSyBBrifsPXUtKP_Z7oNhxPFNiz_CL4MKR4I";
// const trendingUrl = `videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&key=${API_KEY}`;
// const channelUrl = `channels?&part=snippet,statistics&key=${API_KEY}`;

const VideoContainer = ({ sectionTitle }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(trendingUrl);
      const data = resp.data.items.map((item) => {
        const id = item.id;
        const image = item.snippet.thumbnails.medium.url;
        const { duration } = item.contentDetails;
        const {
          channelId,
          title,
          channelTitle,
          publishedAt,
          description,
        } = item.snippet;
        const statistics = item.statistics;
        return {
          id: id,
          channelId: channelId,
          title: title,
          channelTitle: channelTitle,
          image: image,
          duration: duration,
          statistics: statistics,
          publishedAt: publishedAt,
          description: description,
        };
      });
      const fetchItem = async (channelId) => {
        const respItem = await axios.get(`${channelUrl}&id=${channelId}`);
        const itemSnippet = respItem.data.items[0].snippet;
        const thumbnailUrl = itemSnippet.thumbnails.medium.url;
        const { subscriberCount } = respItem.data.items[0].statistics;
        return { thumbnailUrl, subscriberCount };
      };
      const getData = () => {
        return Promise.all(
          data.map(async (item) => {
            const { thumbnailUrl } = await fetchItem(item.channelId);
            const { subscriberCount } = await fetchItem(item.channelId);
            return {
              ...item,
              thumbnailUrl: thumbnailUrl,
              subscriberCount: subscriberCount,
            };
          })
        );
      };
      getData().then((data) => {
        setData(data);
      });
    };
    fetchData();
  }, []);
  return (
    <div className="videoContainer">
      <h1 className="title">{sectionTitle}</h1>
      <div className="videoContainer__body">
        {data.map((item) => {
          return <VideoCard key={item.id} item={item} data={data} />;
        })}
      </div>
    </div>
  );
};

export default VideoContainer;
