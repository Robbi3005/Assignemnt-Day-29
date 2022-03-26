class Store {

    static getAllStores() {
        let sql = `SELECT * FROM store`;
        return sql;
    }

    static getStore() {
        let sql = `SELECT * FROM store where id= ?`;
        return sql
    }

    static addStore() {
        let sql = `INSERT INTO store 
        (id, petId, quantity, shipDate, status, complete) 
        VALUES (?, ?, ?, ?, ?, ?)`;
        return sql
    }
    
    static findId() {
        let sql = `SELECT id FROM store WHERE id >= 0`;
        return sql;
    }

    static updateStore() {
        let sql = `UPDATE store 
        SET petId = ?, quantity = ?, shipDate = ?, status = ?, complete = ?
        WHERE id = ?`;
        return sql
    }

    static deleteStore() {
        let deleteQuery = `DELETE FROM store WHERE id = ?`;
        return deleteQuery;
    }

}

//-----------------------------------------------------------------

module.exports = Store