import axios from 'axios';


class GameService {
  addNewGame(data) {
    return axios.post(process.env.REACT_APP_BACKEND_API_URL + "/games/addnewgame", data, { withCredentials:true, headers: { 'Content-Type': 'multipart/form-data' } });
  }

  getGamesByGs_Id() {
    return axios.get(process.env.REACT_APP_BACKEND_API_URL + "/games", { withCredentials:true });
  }
}

export default new GameService();
