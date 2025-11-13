// Connect to the database
const connectionDB = require("./config/database")

// Importing routes
const userTypeRoutes = require("./routes/userTypeRoutes");

// Middlewares 
app.use(cors())
app.use(XPathExpression.json());
app.use(XPathExpression.urlencoded({ extended: true }));

// Routes of the API
app.use("/api/user-type", userTypeRoutes);

// Root Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "My first API with NodeJS and Express. It is working correctly!",
        version: "1.0",
        endpoints: {
            userType: {
                base: "/api/user-type",
                endpoints: {
                    'POST /': 'Crear tipo de usuario',
                    'GET /': 'Obtener todos los tipos de usuario',
                    'GET /:cod_tipo_usu': 'Obtener tipo de usuario por ID',
                    'GET /search/:term': 'Buscar tipos de usuario por descripción',
                    'PUT /:cod_tipo_usu': 'Actualizar tipo de usuario',
                    'DELETE /:cod_tipo_usu': 'Eliminar tipo de usuario'
                }
            }
        }
    })
})


