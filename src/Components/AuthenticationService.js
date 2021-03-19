import axios from "axios";
import { API_URL } from "./../Constants";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

class AuthenticationService {
  //connects with backend to validate creds
  executeJwtAuthenticationService(username, password) {
    console.log(username + password);
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password,
    });
  }

  registerSuccessfulLoginForJwt(username, token) {

    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createJWTToken(token));
    
  }

  createJWTToken(token) {    
    return "Bearer " + token;
  }

  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return "";
    return user;
  }

  componentWillMount() {
    this.setupAxiosInterceptors();
  }

  //every http request from know on should use the token
  setupAxiosInterceptors(token) {
   
    axios.interceptors.request.use(
      (config) => {
        if (this.isUserLoggedIn()) {
          config.headers.authorization = token;
        }
        return config;
      },
      (error) => {
        console.log("error called in setup axios")
        return Promise.reject(error);
      }
    );
  }
}

export default new AuthenticationService();
