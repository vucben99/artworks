import axios from "axios";
import baseUrl from "./baseUrl.json"

const login = async (email, password, setPage) => {
  try {
    console.log(email,password);
    const response = await axios.post(baseUrl+"api/login", { email, password })
    await localStorage.setItem("bozkovToken",response.data.accessToken)
    const bozkovToken = await localStorage.getItem("bozkovToken")
    console.log("itt vagyok a loginban",bozkovToken);
    console.log("itt vagyok a loginban",localStorage.getItem("bozkovToken"));
    return response.status
  } catch (error) {
    alert("Login failed \n Incorrect email or password")
    console.log(error, "asddadaaddad")
    setPage("login")
    return response.status
  }
}

export default login;