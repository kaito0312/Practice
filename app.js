var express = require('express');
var bodyParser = require('body-Parser');
var multer = require('multer');
var fs = require('fs');
var app = express();
var uploadConfig = multer({
    dest: './upload'
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.get('/api/get', function(req, res) {
    console.log("get=>", req.query);
    res.json({ name: "聖婕" });
});
app.post('/api/post', function(req, res) {
    console.log("post=>", req.body);
    res.end();
})
app.post('/api/upload', uploadConfig.any(), function(req, res) {
    req.files.forEach(function(item, i) {
        var file = req.files[i]
        fs.renameSync(file.path, './upload/' + file.originalname)
    })
    res.end();
})
app.listen(3000);