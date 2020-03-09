let express = require("express");

let router = express.Router();

let burger = require("../config/orm.js");

router.get("/", (req, res) => {
    burger.selectAll( function (result) {
        let burgerNames = [];
        for(var i = 0; i < result.length; i++) {
            burgerNames.push(result[i].burger_name);
        }
        let toRender = {
            burgers: burgerNames
        };
        res.render("index", toRender);
    });
});


// router.post("/api/cats", (req, res) => {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", (req, res) => {
//   let condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", (req, res) => {
//   let condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // Export routes for server.js to use.
module.exports = router;