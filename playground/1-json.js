const fs = require('fs')
// const book = {
//     title: 'basics of node js',
//     author: 'andrew mead'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.author)

const dataJSon = fs.readFileSync('1-json.json').toString()
const data = JSON.parse(dataJSon)
data.name = 'ravinder'
data.age = 25
const changedData = JSON.stringify(data)
fs.writeFileSync('1-json.json', changedData)