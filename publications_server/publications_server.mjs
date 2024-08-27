import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());


app.get('/publications', async (req, res) => {
  const url = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=nst5fHgAAAAJ&sort=pubdate&api_key=4c1902d6e9cf12346fcf8515fd331280c1f63ab7bb1a40cd39b9bd075af93023`;

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
