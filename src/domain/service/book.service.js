module.exports = (repository) => {

    async function findAll(){
        console.log("llego repo")
        const books = repository.findAll();
        return new Promise((resolve, reject) => {resolve(books)})
    }

    async function save(book){
        return new Promise((resolve, reject) => {

            resolve(repository.registerBook(book))
        })
    }

    async function update(id, name){
        return new Promise((resolve, reject) => {

            resolve(repository.update(id, name))
        })
    }

    async function findById(id){
        return new Promise((resolve, reject) => {

            resolve(repository.findById(id))
        })
    }

    return {findAll, save, update, findById}
}