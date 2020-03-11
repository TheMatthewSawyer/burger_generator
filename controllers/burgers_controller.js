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

router.get("/graveyard", (req, res) => {
    burger.selectDevoured( function (result) {
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
        res.render("eaten", context);
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

router.put("/api/burger/:id", (req, res) => {
    burger.updateOne(req.params.id, function (res) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;