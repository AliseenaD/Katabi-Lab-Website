import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());


app.get('/publications', async (req, res) => {
  const url = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=nst5fHgAAAAJ&sort=pubdate&api_key=d86b2a87580e82eacab17b965bd7fdd083d6f7b3e42799c66550bcef4c5d5b44`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Google Scholar data' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
