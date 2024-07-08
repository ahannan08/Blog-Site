const express = require('express');
const auth = require('../middleware/auth');

const {
    getAllPost,
    getPostById,
    createPost,
    updatePost,
    deletePost
} = require("../controllers/post")


const router = express.Router()

router.get("/",getAllPost)
router.get("/:id",getPostById)

router.post("/",auth,createPost)
router.put("/:id",auth,updatePost)
router.delete("/:id",auth, deletePost)
//why id for both update and delete

module.exports = router;
