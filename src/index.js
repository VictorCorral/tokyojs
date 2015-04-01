let TokyoJS = {
  hi(name) {
    let msg = `Hi ${name}, welcome to Tokyo JS`
    if (process && process.env.NODE_ENV == "development") {
      console.log(`DEBUG: ${msg}`)
    }
    return msg
  }
}

module.exports = TokyoJS
