var fs = require("fs");
fs.writeFile('RF_WF.txt', 'Writing into wfrffile!',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("wrote");
   fs.readFile('RF_WF.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("RF_WF file contains\n " + data.toString());
   });
});