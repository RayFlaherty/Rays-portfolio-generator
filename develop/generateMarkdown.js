
function License(licensing) {
    console.log('license: ', licensing);
    switch (licensing) {
      case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      case 'Boost Software License 1.0':
          return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
      case 'The Perl License':
          return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
      case 'GNU General Public License v3.0':
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      case 'Mozilla Public License 2.0':
          return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      default:
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    
}


function generateMarkdown(data) {
    console.log('data is ==>', data);
    return `# ${data['project name']}
  ## Created By
  ${data.name}
  ## GitHub Link
  http://www.github.com/${data.github}
  # TABLE OF CONTENTS
  * [Purpose](#Purpose)
  * [install](#Installation Requirements)
  * [guide](#User Guide)
  * [credits](#Contributors)
  * [licensing](#Security-License)
  # Purpose
  ${data.reason}
  # Installation Requirements
  ${data.install}
  # User Guide
  ${data.guide}
  # Contributors
  ${data.credits}
  # Security License
  ${License(data.licensing)}
  `;
  }

module.exports = generateMarkdown;