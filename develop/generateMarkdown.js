

function renderPurpose(reason) {
    if (reason === true) {
        return reasonInput
    }else{
        `I have no reason`
    }
}


function generateMarkdown (data) {
    console.log ('data is ==>',data)
    return `
    TABLE OF CONTENTS
    [reason](#Purpose)\n
    [install](#Installation-Requirements)\n
    [guide](#User-Guide)\n
    [credits](#Contributors)\n
    [licensing](#Security-License)\n

    #Purpose 
    ${renderPurpose(data.purpose)}
    `;
}

module.exports = generateMarkdown;