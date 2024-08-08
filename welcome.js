const filesystem = require("fs");

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
filesystem.writeFile("welcome.txt", "Hello Node", function (error) {
  //The throw statement throws an exception/(generates) an error.
  if (error) throw error;
  console.log('welcome.txt has been created with content "Hello Node".');
});

// Alternatively
// const filesystem = require("fs");

// filesystem.writeFile("welcome.txt", "Hello Node", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('welcome.txt has been created with content "Hello Node".');
//   }
// });
