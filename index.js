const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

app.get("/",(req,res) => {
    res.sendFile(_dirname + "/index.html")
})

app.listen(PORT, () => {
    console.log(`App has started on port ${PORT}.`)
})