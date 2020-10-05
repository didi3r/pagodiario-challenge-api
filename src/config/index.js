import { merge } from 'lodash';
const env = process.env.NODE_ENV || 'development';
/*
 * This is meant to handle different environments.
 * It loads different configuration files (located on this folder: config/)
 * depending on the NODE_ENV environment variable. Currently, it only has DEV and PROD
 * (TEST is used for Unit Test execution)  environments but of course this can be extended.
 */
const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: process.env.PORT || 3000
};

let envConfig = {};

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').config;
    break;
  case 'test':
  case 'testing':
    envConfig = require('./testing').config;
    break;
  case 'prod':
  case 'production':
    envConfig = require('./prod').config;
    break;
  default:
    envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);
