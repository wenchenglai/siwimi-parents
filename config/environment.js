/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'xiwami-parents',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
        'default-src': "'self'",
        'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net apis.google.com maps.googleapis.com maps.gstatic.com www.geoplugin.net",
        'style-src': "'self' 'unsafe-inline' use.typekit.net",
        'img-src': "'self' data: fbcdn-profile-a.akamaihd.net",
        'frame-src': "accounts.google.com static.ak.facebook.com s-static.ak.facebook.com www.facebook.com",
        'connect-src': "localhost:8088"
    }
  };

    ENV['simple-auth'] = {
        store: 'simple-auth-session-store:local-storage'
    };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
