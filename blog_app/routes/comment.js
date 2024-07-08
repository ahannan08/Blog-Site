const express = require('express');
const auth = require('../middleware/auth');

const {
    getComments,
    addComment,
    deleteComment
} = require("../controllers/comment")

const router = express.Router()


router.get("/:postId/comments", getComments)
router.post("/:postId/comments",auth,addComment)
router.delete("/:postId/comments/:id",auth,deleteComment)


module.exports = router;
