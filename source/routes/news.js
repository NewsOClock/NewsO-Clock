const express = require(`express`);
const newsRouter = express.Router();
const axios = require(`axios`);

newsRouter.get(``, async (req, res) => {
  try {
    const newsAPI = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8e5c42e99abe4f05a4269014fbee2222`
    );
    res.render(`news`, { article: newsAPI.data });
    console.log(newsAPI);
  } catch (error) {
    res.render(`news`, { article: null });
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.header);
    } else if (err.request) {
      res.render(`news`, { article: null });
      console.log(err.request);
    } else {
      res.render(`news`, { article: null });
      console.log(`Error`, err.message);
    }
  }
});

newsRouter.post(``, async (req, res) => {
  let search = req.body.search;
  try {
    const newsAPI = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=${search}&country=us&category=business&apiKey=8e5c42e99abe4f05a4269014fbee2222`
    );
    res.render(`newsSearch`, { article: newsAPI.data });
  } catch (error) {
    res.render(`newsSearch`, { article: null });
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.header);
    } else if (err.request) {
      res.render(`newsSearch`, { article: null });
      console.log(err.request);
    } else {
      res.render(`newsSearch`, { article: null });
      console.log(`Error`, err.message);
    }
  }
});

module.exports = newsRouter;
