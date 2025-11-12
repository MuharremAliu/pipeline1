const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to skibidi toilet baku my dudes');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
