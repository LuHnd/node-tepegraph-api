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
      .post(BASE + path, options, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data;
      });
  }

  /**
   *
   * Use this method to create a new Telegraph account. Most users only need one account, but this can be useful for channel administrators who would like to keep individual author names and profile links for each of their channels. On success, returns an Account object with the regular fields and an additional access_token field.
   * @param {String} short_name  - Required. Account name, helps users with several accounts remember which they are currently using. Displayed to the user above the "Edit/Publish" button on Telegra.ph, other users don't see this name.
   * @param {Object} [options]
   * @param {String} [options.author_name] - Default author name used when creating new articles.
   * @param {String} [options.author_url] - Default profile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel.
   */
  createAccount(short_name, options = {}) {
    return this._request("createAccount", {
      short_name,
      ...options,
    });
  }

  /**
   *
   * Use this method to update information about a Telegraph account. Pass only the parameters that you want to edit. On success, returns an Account object with the default fields.
   * @param {String} access_token - Required. Access token of the Telegraph account.
   * @param {Object} [options]
   * @param {String} [options.short_name] - New account name.
   * @param {String} [options.author_name] - New default author name used when creating new articles.
   * @param {String} [options.author_url] - New default profile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel.
   */
  editAccountInfo(access_token, options = {}) {
    return this._request("editAccountInfo", {
      access_token,
      ...options,
    });
  }
  /**
   *
   * Use this method to create a new Telegraph page. On success, returns a Page object.
   * @param {String} access_token - Required. Access token of the Telegraph account.
   * @param {String} title - Required. Page title.
   * @param {Array} content - Required. Content of the page.
   * @param {Object} [options]
   * @param {String} [options.author_name] - Author name, displayed below the article's title.
   * @param {String} [options.author_url] - Profile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel.
   * @param {Boolean} [options.return_content] - If true, a content field will be returned in the Page object (see: Content format).
   */
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
