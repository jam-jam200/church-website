const AdminBro = require("admin-bro");
const argon2 = require("argon2");

/**
 * @type {AdminBro.After<AdminBro.ActionResponse>}
 * @param {*} response 
 * @returns 
 */
const after = async (response) => {
          if (response.record && response.record.errors){
              response.record.errors.password = response.record.errors.encryptedPassword
          }
          return response
      }


/**
 * @type {AdminBro.Before}
 * @param {*} request 
 * @returns 
 */
 const before = async (request) => {
        if (request.method === "post") {
          const { password, ...otherParams } = request.payload;
          if (password) {
            const encryptedPassword = await argon2.hash(password);
            return {
                ...request,
                payload: {
                    ...otherParams,
                    encryptedPassword
                }
            }
          }
        }
        return request;
    }

module.exports = { after, before }
      