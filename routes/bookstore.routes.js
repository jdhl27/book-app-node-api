var express = require('express');
var router = express.Router();

const BookRepository = require('../src/domain/repository/book.repository')
const BookController = require("../src/api/book.controller")

const userRoutes = () => {
    const repository = new BookRepository();
    const controller = BookController(repository)
  
    router.route('/')
    .get(controller.findAll)
    .post(controller.save);

    router.route('/upload/:id')
    .post(controller.upload)

    router.route('/:id')
    .get(controller.findById)
  
    return router;
}


module.exports = userRoutes;