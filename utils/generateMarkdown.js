// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// I used https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500 and https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba to do the badges.  Did a switch/case/break based on the licenses i used in list in index.js
// I combined the badge and link from reading the comments in the github repositories listed above.  

function renderLicenseBadge(license) {
    let badge;
    switch (license) {
        case "None":
            badge = ""
            link = ""
            break;
        case "Apache License 2.0":
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            link = "https://opensource.org/licenses/Apache-2.0";
            break;
        case "GNU General Public License":
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
            link = "http://www.gnu.org/licenses/gpl-3.0";
            break;
        case "MIT License":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            link = "https://opensource.org/licenses/MIT";
            break;
        case "BSD 2":
            badge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
            link = "https://opensource.org/licenses/BSD-2-Clause";
            break;
        case "BSD 3":
            badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            link = "https://opensource.org/licenses/BSD-3-Clause";
            break;
        case "Boost Software License 1.0":
            badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            link = "https://opensource.org/licenses/BSL-1.0";
            break;
        case "Creative Commons Zero v1 .0 Universal":
            badge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            link = "http://creativecommons.org/publicdomain/zero/1.0/";
            break;
        case "Eclipse Public License 2.0":
            badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
            link = "https://opensource.org/licenses/EPL-1.0";
            break;
        case "GNU Affero Genral Public License v3 .0":
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
            link = "http://www.gnu.org/licenses/gpl-3.0";
            break;
        case "GNU General Public License v2 .0":
            badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](http://www.gnu.org/licenses/gpl-2.0)";
            link = "https://opensource.org/licenses/gpl-2.0.php";
            break;
        case "GNU Lesser General Public License v2 .1":
            badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)";
            link = "http://www.gnu.org/licenses/lgpl-3.0";
            break;
        case "Mozilla Public License 2.0":
            badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            link = "https://opensource.org/licenses/MPL-2.0";
            break;
        case "The Unlicense":
            badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            link = "https://opensource.org/licenses/unlicense";
            break;
    }
    return [badge, link];
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let section;
    const [badge, link] = renderLicenseBadge(license);
    if (license == "none") {
        section = "";
        content = "";
    } else {
        section = `# License ${badge}
    This project uses the ${license} license.
    
    License Link: ${link}`;
        content = "- [License](#license)"
    }
    return [section, content];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const [badge] = renderLicenseBadge(data.license);
    const [licenseSection, content] = renderLicenseSection(data.license);
    // copied markdown code from my skeleton ReadME then made adjustments
    return `# ${data.title}
#  
## Table of Contents:

*[Description](#Description: )

*[Installation](#Installation: )

*[Usage](#Usage: )

*[License](#License: )

*[Contributing](#Contributing: )

*[Tests](#Tests: )

*[Questions](#Questions: )
  
#
## Description:
${data.description}

${badge}
  
#
## Installation:
${data.installation}
  
#
## Usage:
${data.usage}
  
#
## License:
${data.license}

${badge}
  
#
## Contributing:
${data.contributing}
  
#
## Tests:
${data.tests}
  
#
## Questions:
If you have any questions about the project you can contact me via email or GitHub
  
Email: ${data.email}
  
GitHub Profile: ${data.username}
  `;
}

module.exports = {
    generateMarkdown
};