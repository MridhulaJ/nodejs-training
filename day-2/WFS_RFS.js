var fs = require('fs');
fs.writeFileSync('WFS_RFS.txt', "Writing to a file using WRITEFILESYNC and reading using ReadFileSync", {"encoding":'utf8'});
console.log("file written");
var result= fs.readFileSync('WFS_RFS.txt', "utf8");
  console.log("WFSyRFSy file contains");
  console.log(result);
 