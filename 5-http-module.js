const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('welcome to home page')
    }
    if(req.url === '/about') {
        res.end('Here is out short history')
    }
    res.end(`
    <h1>Not Found</h1>
    <a href="/about" >Go back</a>`
    )
})

server.listen(5000);
