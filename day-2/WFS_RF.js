var fs = require('fs');
fs.writeFileSync('WFS_RF.txt', "Writing to a file using WRITEFILesyn", {"encoding":'utf8'});
console.log("Fiile written successfully");
fs.readFile('WFS_RF.txt', "utf8", function(err, data){
  if ( err ){
   throw err;
  }
  console.log("WFSRF file contains");
  console.log(data);
});
