import axios from 'axios'

const API_URI = 'localhost:8080/'

export default class Requests {
  /**
   * get
   *
   * @static
   * @param {string} url url target
   * @returns {function} axios function
   */
  static get (url) {
    return axios({
      method: 'get',
      baseURL: API_URI,
      url: url
    })
  }

  /**
   * post
   *
   * @static
   * @param {string} url url target
   * @param {object} data data to send
   * @returns {function} axios function override
   */
  static post (url, data) {
    return axios({
      method: 'post',
      baseURL: API_URI,
      url: url,
      data: data
    })
  }
}
