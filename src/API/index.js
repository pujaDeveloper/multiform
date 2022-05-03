import axios from 'axios';
import {
  // User
  LOGIN,

  // photos
  GET_ALL_PHOTOS

} from "./urls";

export default class API {
  // User
  static async login(requestData) {
    console.log("login Url", LOGIN);
    console.log("login Request", requestData);
    return await axios.post(LOGIN, requestData)
  }

  //get photos with pagination
  static async getPhotos(pageNo, pageSize) {
    console.log("get photos Url", GET_ALL_PHOTOS);
    let paginationURL = GET_ALL_PHOTOS + "?_start=" + pageNo + "&_limit=" + pageSize
    return await axios.get(paginationURL)
  }

}
