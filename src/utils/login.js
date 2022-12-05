import axios from "axios";
import baseUrl from "./baseUrl.json"


const login = async (email, password) => {
  try {
    console.log(email,password);
    const response = await axios.post(baseUrl+"api/login", { email, password })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}





// const login = async (email, password) => {

//   console.log(email,password);

//   const options = {
//     method: 'POST',
//     cache: "no-cache",
//     mode: "cors",
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({email ,password})
//     // body: JSON.stringify({email:"kallosaaa@valami.hu",password:"123re4"})
//     // body: JSON.stringify({email:"kallos@kamu.hu",password:"1234"})
//   };
  
//   fetch(baseUrl+'api/login', options)
//     .then(response => response.json())
//     .then(data => console.log(JSON.parse(data)))
//     .catch(err => console.error(err));


//   // const response = await axios.post("/api/login", options);

//   // console.log(response);
// };
export default login;
