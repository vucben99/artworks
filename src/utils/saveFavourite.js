import baseUrl from "./baseUrl.json";
import axios from "axios";

const saveFavourite = async (imgObj) => {
  const bozkovToken = localStorage.getItem("bozkovToken");

  const title = imgObj.title;
  const description = {
    artist: imgObj.artist,
    date: imgObj.date,
    moreInfoUrl: imgObj.description,
    tags: "",
  };

  //ide jön a bolb és a logikája
  const res = await fetch(imgObj.url, {
    mode: "no-cors",
  });

  const imgBlob = await res.blob();
  console.log(res.blob());

  const imgFile = await new File([imgBlob], "image.jpeg", {
    type: imgBlob.type,
  });
  console.log(imgFile);

  // const formdata = new FormData()
  // formdata.append("imgfile",imgFile)
  // formdata.append("title",title)
  // formdata.append("description",JSON.stringify(description))

  // const response = await fetch(baseUrl+"api/artwork",{
  //   method: "POST",
  //   headers: {
  //     "Content-type": "multipart/formdata",
  //     "Authorization": "Bearer "+bozkovToken
  //   },
  //   body: formdata
  // })

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYWxsb3NAa2FtdS5odSIsInJvbGVzIjpbIlVTRVIiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDkxL2FwaS9sb2dpbiIsImV4cCI6MTY3MDUwNTY0Mn0.ioZjWGQLGFnzmUewkLeV3XAvp3KVILJ1iL4j4pSWEao"
  );

  var formdata = new FormData();
  formdata.append("file", imgFile);
  formdata.append("title", title);
  formdata.append("description", description);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("http://localhost:8091/api/artwork", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  console.log(response.status);
};

export default saveFavourite;
