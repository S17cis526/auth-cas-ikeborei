/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3000;

// Requires
var fs = require('fs');
var https = require('https');
var http = require('http');
var express = require('express');

//The webserver
//var options = {
//  key: fs.readFileSync('server.key'),
//  cert: fs.readFileSync('server.cert')
//}
//var server = https.createServer(option, app);
// The Express app
var app = express();

// Serve files from public folder
app.use(express.static('public'));

// Start the server
app.listen(PORT, function(){
  console.log(PORT);
});
