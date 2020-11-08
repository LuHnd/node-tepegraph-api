const Telegraph = require("../src/telegraph");

const tph = new Telegraph();
const token = "a8c53654f596b853aa10c393771031331faa605978f67a796dbd239cb64a";

test("createPage", () => {
  return tph
    .createPage(token, "title", [{ tag: "p", children: ["Test"] }])
    .then(function (res) {
      expect(res.ok).toBe(true);
    });
});
