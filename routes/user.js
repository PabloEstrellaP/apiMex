const { Router } = require('express');
const router = Router();

const { addUser, deleteUser, editUser, getUserById, getUsers } = require('../controller/user');

router.post('/', addUser);
router.delete('/:id', deleteUser);
router.put('/', editUser);
router.get('/byId/:id', getUserById);
router.get('/:idAdmin', getUsers);

module.exports = router;