const db = require('../../config/database');

const methods = {
    async getCategories(req, res, next) {
        try {
          
        } catch (error) {
            return res.status(404).send({ error });
        }
    },
   
}

module.exports = { ...methods }