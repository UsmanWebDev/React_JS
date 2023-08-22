const Video = ({
  title,
  channelName,
  views,
  rateing,
  color,
  img,
  yearAge,
  verified,
}) => {
  return (
    <>
      <div
        style={{
          color: "white",
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: color,
          margin: 20,
          padding: 20,
          borderRadius: 10,
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
      >
        <img src={img} alt="imges" />
        <h1>{title}</h1>

        <div>
          {channelName} {verified && "✅"}
        </div>

        <h3>
          {views} <span> | </span> {yearAge}
        </h3>

        <h4>{rateing}</h4>
      </div>
    </>
  );
};

export default Video;
