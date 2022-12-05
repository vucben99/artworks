import baseUrl from "./baseUrl.json"
import axios from "axios"


const register = async (email,password) => {
  console.log("elindult a register")
  const response = await axios.post(baseUrl+"api/signup", { email, password })
  console.log(response)
}


// const  = async (email, password) => {

//   console.log(email,password);






//   const options = {
//     method: 'POST',
//     cache: "no-cache",
//     // mode: "cors",
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({email:"valami1@valami.hu",password:"1234"})
//     // body: JSON.stringify({email:"kallosaaa@valami.hu",password:"123re4"})
//   };
  
//   fetch('http://localhost:8090/api/signup', options)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));


//   // const response = await axios.post("http://localhost:8080/api/signup", { email, password });

//   // console.log(response);
// };
export default register;
