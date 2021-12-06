
function License(licensing) {
    console.log('license: ', licensing);
    switch (licensing) {
      case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      
      default:
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    
}


function generateMarkdown (data) {
    console.log ('data is ==>',data)
    return `
        Creator
    ===============    
     ${data.name}
    ===============

       GitHub Link
    =======================   
    github./${data.github}
    =======================



    # TABLE OF CONTENTS
    * [reason](#Purpose)\n
    * [install](#Installation-Requirements)\n
    * [guide](#User-Guide)\n
    * [credits](#Contributors)\n
    * [licensing](#Security-License)\n
 
    # Purpose 
    ${data.reason}

    # Installation-Requirements
    ${data.install}

    # User-Guide
    ${data.guide}

    # Contributors
    ${data.credits}

    # Security License
    ${License(data.licensing)}

    `;
}

module.exports = generateMarkdown;