let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'deliveroo_clone',
    insecureAuth : true,
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    
    console.log('Connected to the MySQL server.');
});

//-----------------featured_row------------------
// CREATE TABLE `deliveroo_clone`.`featured_row` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `title` VARCHAR(255) NOT NULL,
//   `description` VARCHAR(255) NOT NULL,
//   PRIMARY KEY (`id`),
//   UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
// ALTER TABLE `deliveroo_clone`.`featured_row` 
// CHANGE COLUMN `description` `description` LONGTEXT NOT NULL ;

//-----------------resturant------------------
// CREATE TABLE `deliveroo_clone`.`restaurants` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `imgUrl` VARCHAR(255) NOT NULL,
//   `title` VARCHAR(255) NOT NULL,
//   `rating` FLOAT NOT NULL,
//   `genere` VARCHAR(255) NULL,
//   `address` VARCHAR(255) NOT NULL,
//   `description` VARCHAR(255) NOT NULL,
//   `dishes` JSON NOT NULL,
//   `long` VARCHAR(255) NOT NULL,
//   `lat` VARCHAR(255) NOT NULL,
//   PRIMARY KEY (`id`),
//   UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);



// const sql = 'SELECT * FROM categories';

// connection.query(sql, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }else {
//         console.log(results)
//     }
//   });

  // connection.end(function(err) {
  //   if (err) {
  //     return console.log(err.message);
  //   }
  // });
  
module.exports = connection;
