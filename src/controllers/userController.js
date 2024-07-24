import userService from '../services/userService'


let handleCreateUser = (req, res) => {

    userService.handleCreateUser(req.body)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleGetUser = (req, res) => {

    userService.handleGetUser(req.body)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleCreatePost = (req, res) => {

    userService.handleCreatePost(req.body)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}
let handleUpdatePost = (req, res) => {

    userService.handleUpdatePost(req.body)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleDeletePost = (req, res) => {

    userService.handleDeletePost(req.body)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleCreateComment = (req, res) => {

    userService.handleCreateComment(req.body)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleUpdateComment = (req, res) => {

    userService.handleUpdateComment(req.body)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleDeleteComment = (req, res) => {

    userService.handleDeleteComment(req.body)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

module.exports = {
    handleCreateUser: handleCreateUser,
    handleGetUser: handleGetUser,
    handleCreatePost: handleCreatePost,
    handleUpdatePost: handleUpdatePost,
    handleDeletePost: handleDeletePost,
    handleCreateComment: handleCreateComment,
    handleUpdateComment: handleUpdateComment,
    handleDeleteComment: handleDeleteComment
}