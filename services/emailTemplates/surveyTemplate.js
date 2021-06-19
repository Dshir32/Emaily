const keys = require('../../config/keys');
module.exports = (survey) => {
    return `
        <html>
            <body>
                <div>
                    <h3>Id like your input!</h3>
                    <p>Please answer the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectyDomain}/api/surveys/thanks">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectyDomain}/api/surveys/thanks">No</a>
                    </div>
                </div>
            </body>
        </html>  
    `;
};