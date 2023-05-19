const db = require("../../../src/infrastructure/db").db();

module.exports = class BookRepository {

    constructor() {

    }

    registerBook(book) {
        return new Promise((resolve, reject) => {
            
            let sql = "INSERT INTO books ( name,  author, stock, state )  values ( ?, ?, ?,? )  ;"
            db.run(sql, [book.name, book.author, book.stock, book.state], (err) => {
                console.log("si señor")
                if (err) {
                    console.error(err);
                    resolve("Ocurrio un error al insertar")
                }
            });
            resolve()
        });
    }

    update (id, name) {
        return new Promise((resolve, reject) => {
            let sql = "Update books set image = ? where id = ? ;"
            db.run(sql, [name, id], (err) => {
                if (err) {
                    console.error(err);
                    resolve("Ocurrio un error al insertar")
                }
            });
            resolve()
        });
    }

    findAll() {
        return new Promise((resolve, reject) => {
    
            db.all("Select * from books", [], (err, rows) => {
                if (err) {
                    console.error(err)
                    resolve("Error al consultar la bd")
                }

                resolve(rows)
              
            })
        })
    }

    findById(id){
        return new Promise((resolve, reject) => {
    
            db.get("Select * from books where id = ?", [id], (err, rows) => {
                if (err) {
                    console.error(err)
                    resolve("Error al consultar la bd!")
                }

                resolve(rows)
              
            })
        })
    }
}