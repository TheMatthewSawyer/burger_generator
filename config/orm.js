const connection = require('../config/connection.js');

let orm = {
    selectAll: () => {
      let queryString = "SELECT * FROM burgers;";
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        return(result);
      });
    },
    insertOne: (new_burger) => {
      let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??, false);";
  
      connection.query(queryString, [new_burger], (err, result) => {
        if (err) {
          throw err;
        }
        return(result);
      });
    },
    updateOne: (new_name, old_id) => {
      let queryString = "UPDATE burgers SET burger_name = ?? WHERE id = ??;";
  
      connection.query(queryString, [new_name, old_id], (err, result) => {
        if (err) {
          throw err;
        }
  
        return(result);
      });
    }
  };

  module.exports = orm;