'use strict';

// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
var getenv = require('getenv');
var REACT_APP = /^REACT_APP_/i;
var GOOGLE_KEY = getenv('GOOGLE_KEY');

function getClientEnvironment(publicUrl) {
    var raw = Object
        .keys(process.env)
        .filter(key => REACT_APP.test(key))
        .reduce((env, key) => {
            env[key] = process.env[key];
            return env;
        }, {
            // Useful for determining whether we’re running in production mode.
            // Most importantly, it switches React into the correct mode.
            'NODE_ENV': process.env.NODE_ENV || 'development',
            // Useful for resolving the correct path to static assets in `public`.
            // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
            // This should only be used as an escape hatch. Normally you would put
            // images into the `src` and `import` them in code to get their paths.
            'PUBLIC_URL': publicUrl,
            'GOOGLE_KEY': GOOGLE_KEY
        });
    // Stringify all values so we can feed into Webpack DefinePlugin
    var stringified = {
        'process.env': Object
            .keys(raw)
            .reduce((env, key) => {
                env[key] = JSON.stringify(raw[key]);
                return env;
            }, {})
    };

    return { raw, stringified };
}

module.exports = getClientEnvironment;
