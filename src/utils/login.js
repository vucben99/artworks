import axios from "axios";
import baseUrl from "./baseUrl.json"


const login = async (email, password) => {
  try {
    console.log(email,password);
    const response = await axios.post(baseUrl+"api/login", { email, password })
    sessionStorage.setItem("bozkovToken",response.data.accessToken)
    const bozkovToken = sessionStorage.getItem("bozkovToken")
    console.log(bozkovToken);
    return response.data
  } catch (error) {
    alert("Login failed \n Incorrect email or password")
    console.log(error)
    return null
  }
}

export default login;
