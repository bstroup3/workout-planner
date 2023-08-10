const express = require('express');
const app = express();
// serve up production assets
const path = require('path');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "..", "build")));
// serve up the index.html if express does'nt recognize the route
app.get('', (req, res) => {
res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
// if not in production use the port 3009
const PORT = process.env.PORT || 3009;
console.log('server started on port:',PORT);
app.listen(PORT);