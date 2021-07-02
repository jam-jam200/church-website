const AdminBro = require("admin-bro");
const Admin = require("./admin/admin.admin");
const { Contact } = require("./contact/contact.entity");
const { Devotion } = require("./admin/admin.entity");
const AdminBroMongoose = require("admin-bro-mongoose");

/**
 * @type {AdminBro.AdminBroOptions}
 */

AdminBro.registerAdapter(AdminBroMongoose);

const options = {
  resources: [Admin, Contact, Devotion],
};

module.exports = options;
