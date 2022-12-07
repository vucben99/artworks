import baseUrl from "./baseUrl.json"
import axios from "axios"


const register = async (email, password) => {

  try {
    const response = await axios.post(baseUrl + "api/signup", { email, password })
    console.log(response)
  } catch (error) {
    console.log(error)
  }



}

export default register;
