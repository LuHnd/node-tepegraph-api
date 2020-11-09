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
   * Use this method to get information about a Telegraph account. Returns an Account object on success.
   * @param {String} access_token - Required. Access token of the Telegraph account.
   * @param {Object} [options]
   * @param {Array} [options.fields] - List of account fields to return. Available fields: short_name, author_name, author_url, auth_url, page_count.
   */
  getAccountInfo(access_token, options = {}) {
    return this._request("getAccountInfo", {
      access_token,
      ...options,
    });
  }

  /**
   *
   * Use this method to revoke access_token and generate a new one, for example, if the user would like to reset all connected sessions, or you have reasons to believe the token was compromised. On success, returns an Account object with new access_token and auth_url fields.
   * @param {String} access_token - Required. Access token of the Telegraph account.
   */
  revokeAccessToken(access_token) {
    return this._request("revokeAccessToken", { access_token });
  }

  /**
   *
   * Use this method to create a new Telegraph page. On success, returns a Page object.
   * @param {String} access_token - Required. Access token of the Telegraph account.
   * @param {String} title - Required. Page title.
   * @param {Array |} content - Required. Content of the page.
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

  /**
   *
   * Use this method to edit an existing Telegraph page. On success, returns a Page object.
   * @param {String} access_token - Required. Access token of the Telegraph account.
   * @param {String} path - Required. Path to the page.
   * @param {String} title - Required. Page title.
   * @param {Array} content - Required. Content of the page.
   * @param {Object} [options]
   * @param {String} [options.author_name] - Author name, displayed below the article's title.
   * @param {String} [options.author_url] - Profile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel.
   * @param {Boolean} [options.return_content] - If true, a content field will be returned in the Page object (see: Content format).
   */
  editPage(access_token, path, title, content, options = {}) {
    return this._request("createPage", {
      access_token,
      path,
      title,
      content: JSON.stringify(content),
      ...options,
    });
  }

  /**
   *
   * Use this method to get a Telegraph page. Returns a Page object on success.
   * @param {String} path - Required. Path to the Telegraph page (in the format Title-12-31, i.e. everything that comes after http://telegra.ph/).
   * @param {Object} [options]
   * @param {Boolean} [options.return_content] - (default = false) If true, a content field will be returned in the Page object (see: Content format).
   */
  getPage(path, options = {}) {
    return this._request("getPage", {
      path,
      ...options,
    });
  }

  /**
   *
   * Use this method to get a list of pages belonging to a Telegraph account. Returns a PageList object, sorted by most recently created pages first.
   * @param {String} access_token - Required. Access token of the Telegraph account.
   * @param {Object} [options]
   * @param {Integer} [options.offset] - (default = 0) Sequential number of the first page to be returned.
   * @param {Integer} [options.limit] - (0-200, default = 50) Limits the number of pages to be retrieved.
   */
  getPageList(access_token, options = {}) {
    return this._request("getPageList", {
      access_token,
      ...options,
    });
  }

  /**
   *
   * Use this method to get a list of pages belonging to a Telegraph account. Returns a PageList object, sorted by most recently created pages first.
   * @param {String} path - Required. Path to the Telegraph page (in the format Title-12-31, where 12 is the month and 31 the day the article was first published).
   * @param {Object} [options]
   * @param {Integer} [options.hour] - (0-24) If passed, the number of page views for the requested hour will be returned.
   * @param {Integer} [options.day] - (1-31) Required if hour is passed. If passed, the number of page views for the requested day will be returned.
   * @param {Integer} [options.month] - (1-12) Required if day is passed. If passed, the number of page views for the requested month will be returned.
   * @param {Integer} [options.year] - (2000-2100) Required if month is passed. If passed, the number of page views for the requested year will be returned.
   */
  getViews(path, options = {}) {
    return this._request("getViews", {
      path,
      ...options,
    });
  }
}

module.exports = Telegraph;
