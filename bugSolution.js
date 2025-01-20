const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello, world!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send('Something went wrong!');
    });
});

async function doSomethingAsync() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong during the async operation!');
  }
  return 'Async operation completed successfully';
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});