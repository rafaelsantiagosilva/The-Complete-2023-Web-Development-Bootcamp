import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([{ message: "Digite a URL: ", name: 'URL' }])
     .then((answers) => {
          const URL = answers.URL;

          let qrSvg = qr.image(URL, { type: 'svg' });
          qrSvg.pipe(fs.createWriteStream('pudim_qr_code.svg'));

          fs.writeFile("url.txt", URL, (err) => {
               if (err) throw err;
               console.log('A URL foi salva no arquivo url.txt!');
          });
     })