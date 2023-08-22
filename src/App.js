import React from "react";
import Video from "./components/Video";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let Videos = [
    {
      id:100,
      img_id:1,
      title: "React Js",
      channelNam: "UsmanReview",
      views: 10,
      yearAge: "1 year age",
      color: "blue",
      rateing: "9.5",
      verified: true,
    },
    {
      id:101,
      img_id:2,
      title: "Node Js",
      channelNam: "UsmanReview",
      views: 10,
      yearAge: "1 year age",
      color: "green",
      rateing: "9.5",
      verified: true,
    },
    {
      id:103,
      img_id:3,
      title: "Express Js",
      channelNam: "UsmanReview",
      views: 10,
      yearAge: "1 year age",
      color: "red",
      rateing: "9.5",
      verified: true,
    },
  ];

  return (
    <>
      <Header />
      <div className="App" style={{ backgroundColor: "gray", padding: 20 }}>
        {Videos.map((video) => (
          <Video
            // key={video.title} // Make sure to add a unique key for each video
            id={video.id}
            title={video.title}
            channelName={video.channelNam}
            img_id={video.img_id}
            yearAge={video.yearAge}
            views={video.views}
            color={video.color}
            verified={video.verified}
            rateing={video.rateing}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
