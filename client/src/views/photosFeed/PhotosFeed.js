import React, { useEffect, useState } from "react";
import Header from "../../components/header";

import "./PhotosFeed.css";

const Photo = ({ sourceUrl }) => (
  <article className="article">
    <img className="image" src={sourceUrl} alt="" />
  </article>
);

const PhotosFeed = () => {
  const UNSPLASH_TOKEN = "GpKqhzxWheY1xmlfCvT_a8dXzNeQgBeA1i6wptdXBbk";
  const [photoData, setPhotoData] = useState([]);

  const fetchFeed = async () => {
    const links = await fetch(
      `https://api.unsplash.com/photos/?client_id=${UNSPLASH_TOKEN}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const links = data.map((image) => image.urls.regular);
        return links;
      });
    setPhotoData(links);
  };
  useEffect(() => {
    fetchFeed();
  }, []);
  return (
    <section className="photos-feed">
      <Header title="Photos Feed" backTo="/photosHome" />
      <section className="feed">
        {photoData.map((url) => (
          <Photo sourceUrl={url} />
        ))}
      </section>
    </section>
  );
};

export default PhotosFeed;
