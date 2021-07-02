const AdminBro = require("admin-bro");
const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require("./actions/password.hook");
const { Admin } = require("../../model/admin");

/**
 * @type {AdminBro.ResourceOptions}
 */

const options = {
  properties: {
    encryptedPassword: {
      isVisible: false,
    },
    password: {
      type: "password",
    },
  },
  actions: {
    new: {
      after: passwordAfterHook,
      before: passwordBeforeHook,
    },
    edit: {
      after: passwordAfterHook,
      before: passwordBeforeHook,
    },
  },
};

module.exports = {
  options,
  resource: Admin,
};
