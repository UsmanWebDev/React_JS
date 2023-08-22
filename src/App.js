import React from "react";
import Video from "./components/Video";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Videos from "./data/Data";
function App() {
  

  return (
    <>
      <Header />
      <div className="App" style={{ backgroundColor: "gray", padding: 20 }}>
        {Videos.map((video) => (
          <Video
            // key={video.title} // Make sure to add a unique key for each video
            key={video.id}
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
