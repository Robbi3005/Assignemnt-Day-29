const Store = require('../model/model')
const connection = require('../config/db');
const db = require('../config/db');

class Controller {

    static getAllStores(req, res) {

        console.log("All stores is called")

        db.query(Store.getAllStores(), (err, result) => {
            if (err) throw err;
            res.status(200)
            res.send(result)
        })

        // res.status(200).send(JSON.parse(connection.query(Store.getAllStores())));
    }

    static getStore(req, res) {

        const id = req.params.id

        db.query(Store.getStore(), id, (err, result) => {
            if (err) throw err;
            res.status(200)
            res.send(result)
        })

    }

    static addStore(req, res) {

        const data = req.body;

        let dataStore = [
            data.id,
            data.petId,
            data.quantity,
            data.shipDate,
            data.status,
            data.complete
        ];

        let id = data.id;

        if (!id) {
            return res.status(400).json({ message: "petId is required" })           
        }

        const existId = Store.findId(id);

        if (existId != "") {
            return res.status(400).json({ message: "id already exist" })
        }

        db.query(Store.addStore(), dataStore, (err) => {

            if (err) {
                res.status(400).json(err);
            }

            res.status(201).send(req.body)
            console.log("adding new store");
        })
    }

    static updateStore(req, res) {

        const data = req.body;

        const dataStore = [
            data.petId,
            data.quantity,
            data.shipDate,
            data.status,
            data.complete,
            req.params.id,
        ];

        db.query(Store.updateStore(), dataStore, (err) => {

            if (err) throw err;

            // if (data.id != id) {
            //     res.send({ message: "id not found" })
            //     return
            // }

            res.status(201).send(data)
        })
    }

    static deleteStore(req, res) {

        const id = req.params.id

        db.query(Store.deleteStore(), id, (err, result) => {

            if (err) throw err;

            res.status(200).send({ message: `store deleted : ${result.affectedRows} at id : ${id}` })
        })
    }
}

//-----------------------------------------------------------------------

module.exports = Controller;