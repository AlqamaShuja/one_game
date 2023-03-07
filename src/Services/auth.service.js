import axios from 'axios';


class AuthService {
  login({ email, password }) {
    return axios
      .post(process.env.REACT_APP_BACKEND_API_URL + "/auth/gamestudio/signin", { email, password }, { withCredentials: true })
      .then((response) => {
        // localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(data) {
    return axios.post(process.env.REACT_APP_BACKEND_API_URL + "/auth/gamestudio/signup", data, { withCredentials:true });
  }
}

export default new AuthService();
