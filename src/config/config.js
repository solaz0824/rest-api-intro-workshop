const dotenv = require("dotenv");
const logger = require("loglevel");

dotenv.config();

const {
  NODE_ENV = "development",
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  PORT = 6060,
  FB_CERT_TYPE,
  FB_CERT_PROJECT_ID,
  FB_CERT_PRIVATE_KEY_ID,
  FB_CERT_PRIVATE_KEY,
  FB_CERT_CLIENT_EMAIL,
  FB_CERT_CLIENT_ID,
  FB_CERT_AUTH_URI,
  FB_CERT_TOKEN_URI,
  FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
  FB_CERT_CLIENT_X_509_CERT_URL,
} = process.env;

const ENV = NODE_ENV || "development";

logger.enableAll();

const CONFIG = {
  production: {
    app: {
      PORT: PORT || 6060,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
    encrypt: {},
    firebase: {
      certConfig: {
        type: FB_CERT_TYPE,
        project_id: FB_CERT_PROJECT_ID,
        private_key_id: FB_CERT_PRIVATE_KEY_ID,
        private_key: FB_CERT_PRIVATE_KEY,
        client_email: FB_CERT_CLIENT_EMAIL,
        client_id: FB_CERT_CLIENT_ID,
        auth_uri: FB_CERT_AUTH_URI,
        token_uri: FB_CERT_TOKEN_URI,
        auth_provider_x509_cert_url: FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
        client_x509_cert_url: FB_CERT_CLIENT_X_509_CERT_URL,
      },
    },
  },
  development: {
    app: {
      PORT: PORT || 6060,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
    encrypt: {},
    firebase: {
      certConfig: {
        type: FB_CERT_TYPE,
        project_id: FB_CERT_PROJECT_ID,
        private_key_id: FB_CERT_PRIVATE_KEY_ID,
        private_key: FB_CERT_PRIVATE_KEY,
        client_email: FB_CERT_CLIENT_EMAIL,
        client_id: FB_CERT_CLIENT_ID,
        auth_uri: FB_CERT_AUTH_URI,
        token_uri: FB_CERT_TOKEN_URI,
        auth_provider_x509_cert_url: FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
        client_x509_cert_url: FB_CERT_CLIENT_X_509_CERT_URL,
      },
    },
  },
  test: {
    app: {
      PORT: PORT || 6060,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
    encrypt: {},
    firebase: {
      certConfig: {
        type: FB_CERT_TYPE,
        project_id: FB_CERT_PROJECT_ID,
        private_key_id: FB_CERT_PRIVATE_KEY_ID,
        private_key: FB_CERT_PRIVATE_KEY,
        client_email: FB_CERT_CLIENT_EMAIL,
        client_id: FB_CERT_CLIENT_ID,
        auth_uri: FB_CERT_AUTH_URI,
        token_uri: FB_CERT_TOKEN_URI,
        auth_provider_x509_cert_url: FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
        client_x509_cert_url: FB_CERT_CLIENT_X_509_CERT_URL,
      },
    },
  },
};

module.exports = {
  config: CONFIG[ENV],
};
