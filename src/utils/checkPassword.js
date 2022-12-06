const checkPassword = (inputtxt) => {
  let passw = `^(?=.*?[A-Z])(?=.*?[0-9]).{8,256}$`;
  if (inputtxt.match(passw)) {
    return true;
  } else {
    return false;
  }
};

export default checkPassword