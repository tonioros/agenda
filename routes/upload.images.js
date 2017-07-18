var formidable = require('formidable');
var express = require('express');

var router = express.Router();

router.post('/upload', function(req, res, next) {
    console.log('si llego hasta aca xD');
    let form = formidable.IncomingForm()
    let filePath = 'http://localhost:3000/';

    form.parse(req, function() {
    });
    form.on('fileBegin', function(name, file) {
      console.log(req);
      filePath += file.path = './public/images/' + file.name;
    });

    form.on('end', function() {
      res.json({path: this.filePath});
      next();
    })

});


module.exports = router;