const connection = require('./db')

class dataBaseManipulation {

    static connectDatabase() {
        connection.connect((err) => {
            if (err) throw console.log("data base not connected");
            console.log("database connected")
        })
    }

    // static createTableStore() {

    //     let sql = `INSERT INTO store_order.store 
    //     (petId, quantity, shipDate, status, complete) 
    //     VALUES (4, 10, '2021-10-11 10:11', 'uncomplete', 0)`

    //     connection.query (sql, function (err) {
    //         if (err) throw err;
    //         console.log("1 record inserted")
    //     })
    // }

}

//---------------------------------------------------------------

const activeDataBaseFunction = [
    dataBaseManipulation.connectDatabase(),
    // dataBaseManipulation.createTableStore()
]

//---------------------------------------------------------------

module.exports = activeDataBaseFunction;