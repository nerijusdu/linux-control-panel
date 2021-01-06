const express = require('express');
const app = express();
const port = process.env.LCP_SERVER_PORT || 4200;

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`LCP server listening on port ${port}`);
});
