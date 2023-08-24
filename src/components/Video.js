const Video = ({
  title,
  channelName,
  views,
  rateing,
  color,
  img_id,
  yearAge,
  verified,
  children,
}) => {
  return (
    <>
      <div
        style={{
          color: "white",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: color,
          margin: 20,
          flexWrap:"wrap",
          padding: 20,
          borderRadius: 10,
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
      >
        <img src={`https://picsum.photos/id/${img_id}/300/300`} alt="imges" />
        <h1>{title}</h1>

        <div>
          {channelName} {verified && "✅"}
        </div>

        <h3>
          {views} <span> | </span> {yearAge}
        </h3>

        <h4>{rateing}</h4>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Video;
