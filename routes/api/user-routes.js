const router = require('express').Router();
const {
    addFriend,
    createUser,
    getAllUsers,
    getUsersById,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUsersById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/api/users/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;
