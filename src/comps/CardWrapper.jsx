import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";
import "./CardWrapper.css";

function CardWrapper({ loadingImgs, imgList }) {
  return loadingImgs ? (
    <div id="loadingContainer">
      <h1>Loading results...</h1>
      <LoadingSpinner />
    </div>
  ) : (
    <main>
      <div id="#home"></div>
      {imgList.length ? (
        <ul>
          {imgList.map((imgObj) => (
            <Card imgObj={imgObj} key={imgObj.id} />
          ))}
        </ul>
      ) : (
        <span className="no-result-text">
          Whoops, looks like there are no results.
        </span>
      )}
    </main>
  );
}

export default CardWrapper;
