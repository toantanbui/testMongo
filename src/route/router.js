import express from 'express'
import userController from '../controllers/userController'

let router = express.Router();

const handleRouter = (app) => {
    router.get('/', (req, res) => {
        res.send('Trang chu')
    })
    router.post('/createUser', userController.handleCreateUser)
    router.post('/getUser', userController.handleGetUser)

    router.post('/createPost', userController.handleCreatePost)
    router.post('/updatePost', userController.handleUpdatePost)
    router.post('/deletePost', userController.handleDeletePost)

    router.post('/createComment', userController.handleCreateComment)

    return app.use('/', router)
}

module.exports = {
    handleRouter: handleRouter
}
