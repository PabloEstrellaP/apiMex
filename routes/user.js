const { Router } = require('express');
const router = Router();

const { addUser, deleteUser, editUser, getUserById, getUsers } = require('../controller/user');

router.post('/', addUser);
router.delete('/', deleteUser);
router.put('/', editUser);
router.get('/:id', getUserById);
router.get('/', getUsers);

module.exports = router;