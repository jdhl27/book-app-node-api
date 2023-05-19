const express = require("express")

const bookRoutes = require("./bookstore.routes")


const Routes = () => {
    const router = express.Router();
    router.use("/book", bookRoutes())
    return router
}

module.exports = Routes;