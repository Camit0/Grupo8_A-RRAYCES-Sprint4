// requerimos express y path
const express = require('express')
const path= require ('path')

//requerimos nuestras rutas 
const mainRoutes= require("./routes/mainRoutes")
const productRoutes= require("./routes/productRoutes")
const userRoutes= require("./routes/userRoutes")

// guardamos en un constante app la funcionalidad de express()
const app = express()

// le indicamos dónde van a estar mis recursos estáticos
app.use(express.static(path.join(__dirname, '../public')))

// habilitamos el uso de temple engines
app.set('view engine','ejs')

// indicamos donde va a estar la carpeta de vistas
app.set('views', path.join(__dirname, 'views'))

// requerimos método Override
const methodOverride =  require('method-override');

// configuro el uso de Oerride para poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride('_method')); 

// habilitamos las rutas
app.use("/", mainRoutes)
app.use("/products", productRoutes)
app.use("/users", userRoutes)

// definimos el puerto en el que se va a levantar el servidor con variable de entorno
const port = process.env.PORT || 3000

// Levantamos el servidor con app.listen(port)
app.listen(port, () => console.log(`Servidor funcionando en puerto ${
  port}`))
  