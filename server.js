const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

// app.listen(port);
app.listen(3000,'192.168.0.104' || 'localhost',function() {
    console.log('Application worker ' + process.pid + ' started...');
  }
);
console.log("Server Started.");
