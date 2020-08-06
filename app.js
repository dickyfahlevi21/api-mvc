const express = require('express')
const app = express()
const port = 3001

const rootIndex = require('./src/routes/index')
const routerAuthor = require('./src/routes/author')

app.use('/', rootIndex)
app.use('/author', routerAuthor)


app.listen(port, () => {
    console.log(`example at http://localhost:${port}`)
})