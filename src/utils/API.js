import axios from "axios";
const infoToGet = "inc=login,name,email,cell,picture";
const numberOfEmployees = "results=50";
const country = "nat=us"
const query = "https://randomuser.me/api/";


export default {
  search: function() {
    return axios.get(`${query}?${country}&${numberOfEmployees}&${infoToGet}`);
  }
};
