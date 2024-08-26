const express = require("express");
const router = express.Router();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());
app.use(cors());

const songs = [];

const createdsongs = router.post("/songs", (req, res) => {
  const { title, description, status } = req.body;

  const newsongs = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  };

  songs.push(newsongs);
  res.status(201).json({
    songs: songs,
    message: `Songs Successfully created!`,
  });
});

const getsongs = router.get("/songs", (req, res) => {
  res.status(200).json(songs);
});

app.use(createdsongs);
app.use(getsongs);

app.listen(3333, console.log("Servidor rodando com sucesso"));
