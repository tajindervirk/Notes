//+ This file creates the server and configs it 

const express = require('express')
const noteModel = require('./models/note.model')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
/*
+ what express.static() does is:
    http://localhost:3000/assets/index-DxyM5OQh.js
    http://localhost:3000/assets/index-CsQ8L8Su.css

    when the backend recieves these request express.static checks the public folder for the assets folder
    if there exists a folder named assets.
    then it checks for the files requested and if they exist they are sent.

    and if a file does not exist it will be handled by wildcard route and the index.html will be sent.
*/
app.use(express.static("./public"))

//+ POST method api
/*
    post /api/notes
- Create new note and save data in mongoDB
- req.body = {title,description}
*/

app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title,
        description
    })

    res.status(201).json({
        message: `note created successfully`,
        note
    })

});

//+ GET method api
/*
    get /api/notes
- fetch all notes data from mongoDB & send it in the response
*/

app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes
    })
});

//+ DELETE method api
/*
    delete /api/notes/:id
- Delete note with id from req.params
*/

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: 'note deleted successfully'
    })
});

//+ PATCH method api
/*
    patch /api/notes/:id
- Update the description of the note using id
- req.body = {description}
*/

app.patch("/api/notes/:id", async (req, res) => {
    const id = req.params.id
    const { title, description } = req.body

    await noteModel.findByIdAndUpdate(id, { title, description })

    res.status(200).json({
        message: "Note updated Successfully"
    })
});

//+ wildcard route
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})

module.exports = app 