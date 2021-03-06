const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('./public'));

app.get('/', function(request, response) {
  response.sendFile('./public/index.html');
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
})
