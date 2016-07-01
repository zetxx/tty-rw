var thrg = require('through2')
var fs = require('fs')
var input = process.stdin
var ttyW = fs.createWriteStream('/dev/ttyACM0')
var ttyR = fs.createReadStream('/dev/ttyACM0')

var ps = thrg(function(chk, enc, done) {
    console.log('---------------------')
    console.log('RESPONSE')
    console.log(chk.toString())
    console.log('---------------------')
    done()
})

input
    .pipe(ttyW)


ttyR
    .pipe(ps)
