const fs = require('fs')
const path = require('path')

const users = []

module.exports = class UserModel {
  constructor(t) {
    this.title = t
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'users.json'
    )
    fs.readFile(p, (err, fileContent) => {
      let users = []
      if (!err) {
        users = JSON.parse(fileContent)
      }
      users.push(this)
      fs.writeFile(p, JSON.stringify(users), (err) => {
        console.log(err)
      })
    })
  }

  static fetchAll() {
    return users
  }
}
