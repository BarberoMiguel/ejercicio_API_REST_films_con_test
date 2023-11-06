const express = require('express')
const app = express()
const port = 3000

const filmsRoutes = require("./routes/films");

app.use('/api/film',filmsRoutes);

app.get("*",(req,res)=>{
    res.status(404).json({message: "Film not found"});
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })