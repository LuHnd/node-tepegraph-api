const BASE = "https://api.telegra.ph/";
const axios = require("axios");

class Telegraph {
  /**
   * @class Telegraph
   * @constructor
   */
  constructor() {}
  _error(err) {
    return new Error(err);
  }
  _isRequired = (param) => {
    throw new Error(param, " is required");
  };

  _request(path, options) {
    return axios
      .post(BASE + path, null, {
        params: options,
      })
      .then((response) => {
        return response.data;
      })
      .catch(function (err) {
        throw this._error(err);
      });
  }
  createAccount() {}
  createPage(access_token, title, content, options = {}) {
    return this._request("createPage", {
      access_token,
      title,
      content: JSON.stringify(content),
      ...options,
    });
  }
}

module.exports = Telegraph;
