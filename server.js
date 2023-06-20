const express = require('express');
  const app = express();
  const server = require('http').Server(app);
  const io = require('socket.io')(server);

  const port = 3000; // Change this to the desired port number

  app.use(express.static('public'));

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
