const db = require('../../config/database');

const methods = {
    async getCategories(req, res, next) {
        try {
            const sql = 'SELECT * FROM categories';

            db.query(sql, function(err, results, fields) {
                if (err) {
                  console.log(err.message);
                }else {
                    console.log(results)
                }
              });
              return res.status(200)
        } catch (error) {
            return res.status(404).send({ error });
        }
    },
   
}

module.exports = { ...methods }