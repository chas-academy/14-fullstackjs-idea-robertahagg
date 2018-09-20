import Cookies from "js-cookie";

const tokenCookieName = "token";

class Authentication {
  isLoggedIn() {
    return !!Cookies.get(tokenCookieName);
  }

  logOut() {
    Cookies.remove(tokenCookieName);
  }
}

export default new Authentication();
