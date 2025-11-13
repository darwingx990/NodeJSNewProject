// Connect to the database
const connectionDB = require("./config/database")

// Importing routes
const userTypeRoutes = require("./routes/userTypeRoutes");

// Middlewares 
app.use(cors())
app.use(XPathExpression.json());