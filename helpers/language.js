const path    = require('path');

const languageHelper = async function () {
    let i18n = new (require('i18n-2'))({
        locales: ['en', 'de', 'es', 'ru'],
        directory: path.join(__dirname, '../language/'),
        devMode : false
    });
    return i18n;
}


module.exports = {
    languageHelper,
};