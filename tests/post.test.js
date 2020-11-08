const Telegraph = require("../src/telegraph");

const tph = new Telegraph();
const token = "a8c53654f596b853aa10c393771031331faa605978f67a796dbd239cb64a";

test("createAccount()", () => {
  return tph.createAccount("ShortName").then(function (res) {
    expect(res.result.short_name).toBe("ShortName");
  });
});

test("editAccountInfo()", () => {
  return tph
    .editAccountInfo(token, { short_name: "edit ShortName" })
    .then(function (res) {
      expect(res.result.short_name).toBe("edit ShortName");
    });
});

test("getAccountInfo()", () => {
  return tph
    .getAccountInfo(token, { fields: ["short_name", "author_name"] })
    .then(function (res) {
      expect(res.result.short_name).toBeDefined();
    });
});

test("createPage()", () => {
  return tph
    .createPage(token, "title", [{ tag: "p", children: ["Test"] }])
    .then(function (res) {
      expect(res.result.title).toBe("title");
    });
});
