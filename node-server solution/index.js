var express = require("express")
var formidable = require('express-formidable')
var fs = require('fs');
var app = express();

app.use(formidable({
	uploadDir: 'public'
}));

app.listen(3000, () => console.log('Server running'));

app.post('/upload', (req, res) => {
	fs.rename(req.files.avatar.path, req.files.avatar.path + '.jpg',
	err => {
		res.send('');
	});
	
})