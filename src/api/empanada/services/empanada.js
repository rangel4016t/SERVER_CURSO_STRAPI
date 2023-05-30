'use strict';

/**
 * empanada service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::empanada.empanada');
