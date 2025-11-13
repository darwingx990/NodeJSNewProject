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

// Root ROute
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "My first API with NodeJS and Express. It is working correctly!",
        version: "1.0",
        endpoints: {
            userType: {
                base: "/api/user-type",
                endpoints: {
                    "POST"
                }
            }
        }
    })
})


