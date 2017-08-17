var express = require("express")
var formidable = require('express-formidable')
var fs = require('fs');
var app = express();

app.use(formidable({
    uploadDir: 'node-server solution/public'
}));

app.listen(3000, () => console.log('Server running'));

app.post('/upload', (req, res) => {
    fs.rename(req.files.avatar.path, req.files.avatar.path + '.jpg',
        err => {
            res.send('');
        });

})

app.get('/images/:image_name', function (req, res) {
    fs.readFile('node-server solution/public/' + req.params.image_name, function (err, data) {
        if (err) throw err; // Fail if the file can't be read.
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(data); // Send the file data to the browser.
    });
});