var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8')

//reads the data a small bit at a time (buffer)
//data gets passed to the variable
//we can recognize when pieces are passed

myReadStream.on('data', function(chunk){
  //data is read and a function fires for each chunk
  console.log('new chunk received:');
 // console.log(chunk);

  //writeable stream

var myWriteStreamm = fs.createWriteStream(__dirname + '/writeMe.txt');


myWriteStreamm.write(chunk)
//we can write stream to a new location
})

//function fires for every chunk
//larger files will have more chunks
//reading data in chunks
//like read file but in small pieces


//summary
//this is like the fs read and write from the beginning, but this time we are doing it bits at a time
//we first read the file as a stream, then write it as a stream




//pipes
//pipes take read streams and 'pipes' it to a write stream
//automatically to write stream

myReadStream.pipe(myWriteStream);
//does the same thing as the above method


//we can put this code

my.ReadStream.pip(res)


//into the server and we can stream the data to the user
//summary
//create server and header
//create read stream
//pipe the data to the user  through the res








//serving html pages to the client/browser/user

//first we create an HTML page (like normal)
//change the header to text/html
//change the file in fs.createReadStream to the html file
//html will be rendered







//serving JSON
///change header to application/JSON
res.end(JSON.stringify(myObj));
//we use this to turn obj into json
//json is returned
//why json:
//we can return JSON, then javascript can do something
