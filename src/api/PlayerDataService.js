import axios from "axios";
import { API_URL, JPA_API_URL } from "./../Constants";

class PlayerDataService {
  retrieveAllPlayers() {
    return axios.get(`${JPA_API_URL}/players?sort=lastName`);
  }

  retrieveSelectedTeam(team) {
    return axios.get(`${JPA_API_URL}/players/team/${team}`);
  }

  getPlayer(id) {
    return axios.get(`${JPA_API_URL}/players/${id}`);
  }

  //POST - Create
  addPlayer(player) {
    return axios.post(`${JPA_API_URL}/players`, player);
  }

  //PUT - Update
  updatePlayer(id, player) {
    return axios.put(`${JPA_API_URL}/players/${id}`, player);
  }

  //DELETE - Delete
  deletePlayer(playerId) {
    return axios.delete(playerId);
  }

  //sort
  sortByTeam() {
    return axios.get(`${JPA_API_URL}/players?sort=team`);
  }

  sortByJerseyNumber() {
    return axios.get(`${JPA_API_URL}/players?sort=jerseyNumber`);
  }

  //   createTodo(name, todo) {
  //     //console.log('executed service')
  //     return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
  // }
}

export default new PlayerDataService();
