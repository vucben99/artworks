const validateEmail=(email) =>
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && email.length<=256)
  {
    return (true)
    
  }
    //alert("You have entered an invalid email address!")
    return (false)
    
}

export default validateEmail