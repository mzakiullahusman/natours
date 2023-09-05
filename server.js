const app = require('./app');

// START SERVER
const port = 3002;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
