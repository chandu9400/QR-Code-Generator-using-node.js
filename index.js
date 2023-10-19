/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';



inquirer
  .prompt([
    /* Pass your questions in here with the help of objects */
    {
    message: "Enter a URL to make a QR code out of:",
    name: "URL",
},
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers.url);
    const url = answers.URL;
    var qr_svg = qr.image(url);
    /* Below written as require('fs'), it can be removed by importing object fs*/
    //qr_svg.pipe(require('fs').createWriteStream('qr_image.svg')); /* file name */
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The qrcode image has been created and saved!");
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      
    }
  });
