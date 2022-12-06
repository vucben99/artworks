import baseUrl from "./baseUrl.json"
import axios from "axios"


const register = async (email,password) => {
  console.log("elindult a register")
  try {
    const response = await axios.post(baseUrl+"api/signup", { email, password })
    alert("Successful registration");
    console.log(response)
  } catch (error) {
    alert("Registration failed");
    console.log(error)
  }
}

export default register;
