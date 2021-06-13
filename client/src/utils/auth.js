import decode from "jwt-decode";

class AuthService {
  // retrieve data saved in token
  getProfile() {
    return decode(this.getToken());
  }

  // check if the user is still logged in
  loggedIn() {
    // checks if a valid token already exists
    const token = this.getToken();
    // check that token is not expired and not undefined
    return !!token && !this.isTokenExpired(token);
  }

  // check if token has expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  // retrive token from localStorage
  getToken() {
    // retrieve user token from localStorage
    return localStorage.getItem("id_token");
  }

  // set token to localStorage and reload page to homepage
  login(idToken) {
    // save user token to localStorage
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  // clear token from localStorage and force logout with reload
  logout() {
    // clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // reload page and reset state of application
    window.location.assign("/");
  }
}

export default new AuthService();
