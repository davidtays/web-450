let config = {};

/**
 * Localhost web server configurations
 */
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';


/**
 * Development database configurations
 *
 */
config.database = {};
config.database.username = 'nqadmin';
config.database.password = '1234nodequiz';
config.database.port = '63842';
config.database.url = 'ds163842.mlab.com';
config.database.name = 'nodequizdb';


module.exports = config;
