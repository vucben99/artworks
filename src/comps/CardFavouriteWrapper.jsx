import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";
import "./CardWrapper.css";
import loadFavouriteArr from "../utils/loadFavouriteArr";

function CardFavouriteWrapper() {
  

  return (
    (favouriteImgList.length>0) && (
      <main>
        {favouriteImgList ? (
          <ul>
            {favouriteImgList.map((favouriteObj, index) => {
              console.log(favouriteObj)
              console.log(index)
              // <Card favouriteObj={favouriteObj} key={favouriteObj[index].id} />;
            })}
          </ul>
        ) : (
          <span className="no-result-text">
            Whoops, looks like there are no results.
          </span>
        )}
      </main>
    )
  );
}

export default CardFavouriteWrapper;
