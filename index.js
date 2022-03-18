// 1. Initialize a new npm project and create an app.js file.
// 2. Create a path to the file using the path module.
const path = require("path");
const fs = require("fs");


// 3. Using the fs module create a new file called homework.txt.
// 4. Inside the file write the following "Hello from our first Node homework".

// fs.mkdir(path.join(__dirname, "/homework", "homework.txt"), err =>{
//     if(err)
//     throw err;
//     console.log("File created successfuly.");
// });

fs.writeFile(path.join(__dirname,"homework.txt"),"Hello from our first Node homework.", err =>{
    if(err)
    throw err;
    console.log("File created successfuly.");
});

// 5. Append to the file the following " FINISHED!".
// 6. Read the file contents and print them out in the console.

fs.appendFile("homework.txt", "\n FINISHED", (err) => {
    if(err) throw err;
    fs.readFile("homework.txt", (error, input) => {
        console.log(input.toString());
        if(error){
            console.log(error);
        }
    });
});

// Done.