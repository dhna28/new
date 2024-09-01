import express from "express";
const app = express();
import cors from "cors"
import bodyParser from "body-parser";
import env from "dotenv";
import path from "path";

app.use(cors());
app.use(express.json())
app.use(express.urlencoded())



const jokes=[
    {
        'id':1,
        "title": "Why did the scarecrow win an award?",
        "content": "Because he was outstanding in his field!"
    },
    {
        'id':2,
        "title": "Why don't skeletons fight each other?",
        "content": "They don't have the guts."
    },
    {
        'id':3,
        "title": "What do you call fake spaghetti?",
        "content": "An impasta!"
    },
    {
        'id':4,
        "title": "Why did the math book look sad?",
        "content": "Because it had too many problems."
    },
    {
        'id':5,
        "title": "What do you call cheese that isn't yours?",
        "content": "Nacho cheese."
    }
]


app.get('/api/jokes', (req, res) => {
    res.json(jokes)
})
app.listen(process.env.PORT || 3000, () => {
    console.log("listenning on ")
})