const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("/src"));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res){
    res.sendFile(path.join("/src" + '/index.html'));
})

console.log("DIRNAME: " + __dirname);
console.log('Console listening');