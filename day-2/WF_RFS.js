var fs = require('fs');
fs.writeFileSync('WF_RFS.txt', "Writing to a file using WRITEFILe and reading using readfilesync", {"encoding":'utf8'});
console.log("Fiile written successfully");
var result= fs.readFileSync('WF_RFS.txt', "utf8");
  console.log("WFreadsyn file contains");
  console.log(result);
 

