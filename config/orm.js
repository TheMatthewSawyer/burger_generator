const connection = require('../config/connection.js');

let orm = {
    selectAll: (cb) => {
      let queryString = "SELECT * FROM burgers WHERE devoured = 0;";
      connection.query(queryString, (err, result) => {
            if (err) { throw err; }
            // console.log(`Select all was called. Retrieved: ${JSON.stringify(result)}`)
            cb(result);
      });
    }, 
    insertOne: (new_burger) => {
      let queryString = "INSERT INTO burgers (burger_name) VALUES (?);";
  
      connection.query(queryString, [new_burger], (err, result) => {
        if (err) { throw err; }
        console.log(`Insert one was called.`)
      });
    },
    updateOne: (id) => {
      let queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?;";
  
      connection.query(queryString, [id], (err, result) => {
        if (err) {
          throw err;
        }
  
        return(result);
      });
    }
  };

  module.exports = orm;