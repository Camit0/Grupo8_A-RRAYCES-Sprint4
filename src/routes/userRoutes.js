const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* ------------ REQUERIMOS MIDDLEWARE ------------ */
const multerMiddleware = require('../middleware/middlemulter')
const upload = multerMiddleware('images/users', 'user')

router.get('/register', userController.registrarse)
router.get('/login', userController.loguearse)
router.get('/cart', userController.carrito)

module.exports = router; 
