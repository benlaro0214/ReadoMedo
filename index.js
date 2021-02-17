
const inquirer = require( 'inquirer' );
const fs = require('fs');
const apache = "![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0) `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`"



function generateREADME( answers ){
    return ` 
              
## ${answers.projectTitle}

${answers.descriptSect} 
 
## Dependencies

* ${answers.DepSect}                    

                    

                    
## Walkthrough
                   
### Installing
                    
* How/where to download your program
* Any modifications needed to be made to files/folders

### How do use ${answers.projectTitle}
* Write the steps here to how to use your software. Alternatively, link to a video that provides the information ${answers.embedVideo} .
                                   
## Licensing

${answers.softLicense} 
                    
## Resources:
                    
* Bootstrap (Components):  https://getbootstrap.com/
* Programmable web: https://www.programmableweb.com/
* freeCodeCamp: https://www.freecodecamp.org/
* MDN web docs moz://a: https://developer.mozilla.org/en-US/
* stack overflow: https://stackoverflow.com/
* w3schools: https://www.w3schools.com/
* Hackaday: https://www.hackaday.com
 `;
}

//
async function main(){
    console.log( `running main` )
    const answers = await inquirer.prompt( 
        [
            {
                type: 'input',
                name: 'projectTitle',
                message: 'What is the Title of your project?',
              },
              {
                type: 'input',
                name: 'descriptSect',
                message: 'Please provide us a brief description of your project.',
              },
              {
                type: 'input',
                name: 'DepSect',
                message: 'Provide us with a brief list of dependencies for your project',
              },
              {
                type: 'input',
                name: 'embedVideo',
                message: 'Paste the code to your embedded video here for a walkthrough. A video walkthrough gives people the chance to learn your code and use it correctly.',
              },
              {
                type: 'list',
                name: 'softLicense',
                message: 'Please choose the following types of software licenses for your project. For a more deeper understanding of what these licenses means, please reffer to https://choosealicense.com for an explanation",  ',
                choices: [`Apache Version 2.0  ${apache}`,
                          'ISC', 
                          `GNU GPLv3`,
                          'MIT', 
                          'None']
            },
        ]
    )


    

    console.log(answers)
    // 2. generate the html
    const output = await generateREADME( answers )
    // 3. write to a file (writeFileSync)
    fs.writeFileSync("README.md", output)
    console.log(process.argv)
    // 4. tell the user we're done
    console.log('There You go')
}
main()

