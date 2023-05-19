const BookService = require("../domain/service/book.service")

module.exports = (repository) => {

    const findAll = (req, res) => {
        console.log("console")
        BookService(repository)
        .findAll()
        .then((result)=> res.status(200).send(result))
        .catch((err) => {
            console.error(err);
            res.json({status:400, message: "Error al consultar!", error: err})
        });
    }

    const save = (req, res) => {
        const book = req.body

        console.log(book)
        BookService(repository)
        .save(book)
        .then((result)=> res.status(201).send(result))
        .catch((err) => {
            console.error(err);
            res.send(err)
        })
    }
    
    const upload = (req, res) => {
        try{
            if(!req.files){
                res.status(400).send({
                    message: "No hay archivos que subir"
                })
            }

            let avatar = req.files.image;
            console.log(req.params)
            let id = req.params.id
            avatar.mv('./uploads/' + avatar.name)

            BookService(repository)
            .update(id, avatar.name)
            .then((result)=> res.status(200).send(result))
            .catch((err) => {
                console.error(err);
                res.send(err)
            })
        } catch(err) {
            res.json({
                message: "Error del servidor!"
            })
        }
    }

    const findById = (req, res) => {

        let id = req.params.id

        BookService(repository)
        .findById(id)
        .then((result)=> res.status(200).send({book: result}))
        .catch((err) => {
            console.error(err);
            res.send(err)
        })
    }
    


    return {
        findAll,
        save,
        upload,
        findById
    }
}