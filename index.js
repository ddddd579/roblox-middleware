const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/npc-ai', async (req, res) => {
  const prompt = req.body.prompt;
  try {
 const response = await axios.post(
  '[https://api.openai.com/v1/chat/completions',](https://api.openai.com/v1/chat/completions',)
  {
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}]
  },
  {
    headers: { "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` }
  }
);
    res.json({ reply: response.data.choices[0].message.content });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

app.get('/', (req, res) => {
  res.send('Roblox Middleware Server is running!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server running on port ' + port);
});
