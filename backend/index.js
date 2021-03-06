const express = require("express");
const axios = require("axios");
const cors = require("cors");
const errorLogger = require("./errorLogger");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({ msg: "Hello There" });
});
// SEARCH FOR ARTIST
app.get("/search/:name", async (req, res) => {
  await axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist?q=${req.params.name}`,
      {
        mode: "cors",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      console.log(err);
      errorLogger(err);
    });
});

// Get USER data from multiple endpoints
app.get("/artist/:id", async (req, res) => {
  const base_url =
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/";

  const response = {};
  await axios
    .get(`${base_url}${req.params.id}`, {
      mode: "cors",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
    .then((data) => {
      response.artist = data.data;
      return axios.get(`${base_url}${req.params.id}/top`, {
        mode: "cors",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
    })
    .then((data) => {
      response.top_tracks = data.data;
      return axios.get(`${base_url}${req.params.id}/albums`, {
        mode: "cors",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
    })
    .then((data) => {
      response.albums = data.data;
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      errorLogger(err);
    });
});

// get track data
app.get("/track/:id", (req, res) => {
  const response = {};
  let albumId = null;
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${req.params.id}`,
      {
        mode: "cors",
        headers: {
          "x-requested-with": "XMLHttpRequest",
        },
      }
    )
    .then((data) => {
      response.track = data.data;
      albumId = data.data.album.id;
      return axios.get(
        `https://api.deezer.com/artist/${data.data.artist.id}/top?limit=5`,
        {
          mode: "cors",
          headers: {
            "x-requested-with": "XMLHttpRequest",
          },
        }
      );
    })
    .then((data) => {
      response.topTracks = data.data;
      return axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}/tracks`,
        {
          mode: "cors",
          headers: {
            "x-requested-with": "XMLHttpRequest",
          },
        }
      );
    })
    .then((data) => {
      response.albumTracklist = data.data;
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      errorLogger(err);
    });
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
