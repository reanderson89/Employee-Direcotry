import axios from "axios";
const infoToGet = "inc=id,name,email,cell,picture";
const numberOfEmployees = "results=10";
const country = "nat=us"
const query = "https://randomuser.me/api/";


export default {
  search: function() {
    return axios.get(`${query}?${country}&${numberOfEmployees}&${infoToGet}`);
  }
};
