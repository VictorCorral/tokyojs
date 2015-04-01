var test = require("tap").test,
    TokyoJS = require("../lib/index")

test("Tokyo JS", function (t) {
  t.equal("Hi foo, welcome to Tokyo JS", TokyoJS.hi("foo"), "foo test")
  t.end()
})
