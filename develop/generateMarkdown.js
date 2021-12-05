

//const renderPurpose = reason
   // if (reasonInput === true) {
     //   return `reasonInput`
    //}else{
      //  `I have no reason`
   // }
//}


function generateMarkdown (data) {
    console.log ('data is ==>',data)
    return `
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
    ${data.licensing}

    `;
}

module.exports = generateMarkdown;