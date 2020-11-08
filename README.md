# Telegra.ph API Wrapper for Node.js

## Methods

- [x] createAccount
- [x] createPage
- [ ] editAccountInfo
- [ ] editPage
- [ ] getAccountInfo
- [ ] getPage
- [ ] getPageList
- [ ] getViews
- [ ] revokeAccessToken

<a name="Telegraph"></a>

## Telegraph

Telegraph

**Kind**: global class

- [Telegraph](#Telegraph)
  - [.createAccount(short_name, [options])](#Telegraph+createAccount)
  - [.createPage(access_token, title, content, [options])](#Telegraph+createPage)

<a name="Telegraph+createAccount"></a>

### telegraph.createAccount(short_name, [options])

Use this method to create a new Telegraph account. Most users only need one account, but this can be useful for channel administrators who would like to keep individual author names and profile links for each of their channels. On success, returns an Account object with the regular fields and an additional access_token field.

**Kind**: instance method of [<code>Telegraph</code>](#Telegraph)

| Param                 | Type                | Description                                                                                                                                                                                              |
| --------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| short_name            | <code>String</code> | Required. Account name, helps users with several accounts remember which they are currently using. Displayed to the user above the "Edit/Publish" button on Telegra.ph, other users don't see this name. |
| [options]             | <code>Object</code> |                                                                                                                                                                                                          |
| [options.author_name] | <code>String</code> | Default author name used when creating new articles.                                                                                                                                                     |
| [options.author_url]  | <code>String</code> | Default profile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel.                                                   |

<a name="Telegraph+createPage"></a>

### telegraph.createPage(access_token, title, content, [options])

Use this method to create a new Telegraph page. On success, returns a Page object.

**Kind**: instance method of [<code>Telegraph</code>](#Telegraph)

| Param                    | Type                 | Description                                                                                                                                    |
| ------------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| access_token             | <code>String</code>  | Required. Access token of the Telegraph account.                                                                                               |
| title                    | <code>String</code>  | Required. Page title.                                                                                                                          |
| content                  | <code>Array</code>   | Required. Content of the page.                                                                                                                 |
| [options]                | <code>Object</code>  |                                                                                                                                                |
| [options.author_name]    | <code>String</code>  | Author name, displayed below the article's title.                                                                                              |
| [options.author_url]     | <code>String</code>  | Profile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel. |
| [options.return_content] | <code>Boolean</code> | If true, a content field will be returned in the Page object (see: Content format).                                                            |
