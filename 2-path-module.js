const path = require('path')

console.log(path.sep)

const filepath = path.join('/Content', 'subfolder', 'test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'Content', 'subfolder', 'test.txt')
console.log(absolute)