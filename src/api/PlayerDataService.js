import axios from "axios";
import { API_URL, JPA_API_URL } from "./../Constants";

class PlayerDataService {
  retrieveAllPlayers() {
    return axios.get(`${JPA_API_URL}/players`);
  }

  retrieveLowerPlayers(team) {
    return axios.get(`${JPA_API_URL}/players/team/${team}`);
  }
}

export default new PlayerDataService();
