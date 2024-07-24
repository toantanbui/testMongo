
import modelMongoDB from "../model/modelMongoDB"

let handleCreateUser = async (data) => {
    if (!data.email || !data.password) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        await modelMongoDB.users.create({
            fistName: data.fistName,
            lastName: data.lastName,
            age: data.age,
            email: data.email,
            password: data.password
        })
        return {
            errCode: 0,
            errMessage: "Create Success"
        }

    }


}

let handleGetUser = async (data) => {
    console.log("data request ", data)
    if (!data.email || !data.password) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        let data1 = await modelMongoDB.users.find({
            email: data.email,
            password: data.password
        })

        return {
            errCode: 0,
            errMessage: "Get successful",
            data: data1
        }
    }
}

let handleCreatePost = async (data) => {
    if (!data.email || !data.password) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        await modelMongoDB.users.updateOne(
            {
                email: data.email,
                password: data.password
            }, {
            $push: {
                post: {
                    postName: data.postName,
                    postContent: data.postContent
                }
            }
        }

        )
        return {
            errCode: 0,
            errMessage: "Update successful",

        }
    }

}

let handleUpdatePost = async (data) => {
    if (!data.idPost) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        await modelMongoDB.users.updateOne(
            {
                email: data.email,
                password: data.password
            }, {
            $set: {
                "post.$[filter]": {
                    postName: data.postName,
                    postContent: data.postContent
                }
            }
        }
            , {
                arrayFilters: [{
                    "filter._id": data.idPost
                }]
            }




        )
        return {
            errCode: 0,
            errMessage: "Update successful",

        }
    }

}

let handleDeletePost = async (data) => {
    if (!data.idPost) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        await modelMongoDB.users.updateOne(
            {
                email: data.email,
                password: data.password
            }, {
            $pull: {
                post: {
                    _id: data.idPost
                }
            }
        }





        )
        return {
            errCode: 0,
            errMessage: "Delete successful",

        }
    }

}

let handleCreateComment = async (data) => {
    console.log("request data", data)
    if (!data.idPost) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        await modelMongoDB.users.updateOne(
            {
                email: data.email,
                password: data.password
            }, {
            $push: {
                "post.$[filter].comment": {
                    firstName: data.firstNameCM,
                    lastName: data.lastNameCM,
                    content: data.contentCM
                }
            }
        }
            , {
                arrayFilters: [{
                    "filter._id": data.idPost
                }]
            }




        )
        return {
            errCode: 0,
            errMessage: "Create successful",

        }
    }
}

let handleUpdateComment = async (data) => {
    if (!data.idPost || !data.idComment) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        await modelMongoDB.users.updateOne(
            {
                email: data.email,
                password: data.password
            }, {
            $set: {
                "post.$[filter1].comment.$[filter2]": {
                    lastName: data.lastNameCM,
                    firstName: data.firstNameCM,
                    content: data.contentCM
                }
            }
        }
            , {
                arrayFilters: [{
                    "filter1._id": data.idPost
                }, {
                    "filter2._id": data.idComment
                }]
            }




        )
        return {
            errCode: 0,
            errMessage: "Update successful",

        }
    }

}

let handleDeleteComment = async (data) => {
    if (!data.idPost) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        await modelMongoDB.users.updateOne(
            {
                email: data.email,
                password: data.password
            }, {
            $pull: {
                "post.$[filter].comment": {
                    _id: data.idComment
                }
            }
        },
            {
                arrayFilters: [{
                    "filter._id": data.idPost
                }]
            }






        )
        return {
            errCode: 0,
            errMessage: "Delete successful",

        }
    }

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