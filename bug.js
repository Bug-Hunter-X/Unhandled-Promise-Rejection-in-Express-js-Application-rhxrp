const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    console.error('Error:', err);
    // Here's the problem: we're not handling the error properly!
    // We should send an error response to the client, not just log it.
    // Also, we should use a more robust error handling mechanism.
    res.status(500).send('Something went wrong!');
  });
});

async function doSomethingAsync() {
  // Simulate a condition where an exception may occur
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