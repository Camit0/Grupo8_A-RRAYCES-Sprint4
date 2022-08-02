const userController = {

    loguearse: function (req, res){
        res.render("users/login")
    },

    
    registrarse: function (req, res){
        res.render("users/register")
    },

    carrito: function (req, res){
        res.render("users/cart")
    }

}

module.exports = userController
