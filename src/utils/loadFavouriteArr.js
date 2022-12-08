import baseUrl from "./baseUrl.json";
import axios from "axios";

const loadFavouriteArr = async () => {
  const bozkovToken = localStorage.getItem("bozkovToken");

  let config = {
    method: "get",
    url: baseUrl + "api/artwork",
    headers: {
      Authorization: "Bearer " + bozkovToken,
    },
  };

  const response = await axios(config);
  const favouriteImgList = await response.data;
  await console.log(response.data);
  await localStorage.setItem("favourites", favouriteImgList);
  return favouriteImgList;
};

export default loadFavouriteArr;
