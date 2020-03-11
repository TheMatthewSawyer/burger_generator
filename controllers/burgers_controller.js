let express = require("express");

let router = express.Router();

let burger = require("../config/orm.js");

router.get("/", (req, res) => {
    burger.selectAll( function (result) {
        let burgers = [];
        for(var i = 0; i < result.length; i++) {
            let tmp = {};
            tmp["Name"] = result[i].burger_name;
            tmp["Id"] = result[i].id;
            tmp["Devoured"] = result[i].devoured;
            burgers.push(tmp);
        }
        let context = {"total" : result.length, burgers};
        console.log(context);
        res.render("index", context);
    });
});

router.put("/api/newburger", (req, res) => {
    console.log(req.body)
    burger.insertOne(req.body.name, function (res) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// router.delete("/api/burger/:id", (req, res) => {
//     let condition = "id = " + req.params.id;
  
//     cat.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
router.put("/api/burger/:id", (req, res) => {
    burger.updateOne(req.params.id, function (res) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

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