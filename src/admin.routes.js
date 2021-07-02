const AdminBro = require("admin-bro");
const { buildAuthenticatedRouter } = require("admin-bro-expressjs");
const express = require("express");
const argon2 = require("argon2");
const { Admin } = require("../model/admin");

/**
 *
 * @param {AdminBro} admin
 * @returns {express.Router} router
 */

const buildAdminRouter = (admin) => {
  const router = buildAuthenticatedRouter(admin, {
    cookieName: "admin-bro",
    cookiePassword: "superlongandcomplicatedname",
    authenticate: async (email, password) => {
      console.log({ email, password });
      const superAdmin = await Admin.findOne({ email });
      console.log(superAdmin.password);
      if (superAdmin && (await argon2.verify(superAdmin.password, password))) {
        return superAdmin.toJSON();
      }
      return null;
    },
  } ,null, {
     resave: false,
     saveUninitialized: true,
  });
  return router;
};

module.exports = buildAdminRouter;
