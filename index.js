var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8')

//reads the data a small bit at a time (buffer)
//data gets passed to the variable
//we can recognize when pieces are passed

myReadStream.on('data', function(chunk){
  //data is read and a function fires for each chunk
  console.log('new chunk received:');
  console.log(chunk);
})

//function fires for every chunk
//larger files will have more chunks
//reading data in chunks
//like read file but in small pieces





//writeable stream


