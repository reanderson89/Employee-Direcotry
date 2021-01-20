import axios from "axios";
const query = "https://randomuser.me/api/?results=10&inc=name,email,cell,picture";


export default {
  search: function() {
    return axios.get(query);
  }
};
