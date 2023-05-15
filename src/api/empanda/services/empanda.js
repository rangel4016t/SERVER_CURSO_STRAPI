'use strict';

/**
 * empanda service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::empanda.empanda');
