import axios from "axios";
const infoToGet = "inc=login,name,email,cell,picture";
const numberOfEmployees = "results=50";
const country = "nat=us"
const query = "https://randomuser.me/api/";

// Created variables for all of the parameters of the API query to make it easier to adjust data as needed.

export default {
  search: function() {
    return axios.get(`${query}?${country}&${numberOfEmployees}&${infoToGet}`);
  }
};
