import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=name,location,email,cell,dob,picture,nat=us&results=10";

export default {
  search: function () {
    return axios.get(BASEURL);
  }
};
