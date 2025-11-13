// Creating Instance of the UserType model
const userType = require("../models/UserType");

//Validating the Creating method of userType
const create = async (req, res) => { 
    try { 
        const { description } = req.body;

        if (!description) {
            return res.status(400).json({
                success: false,
                message: "Description is required."
            })
        }

        const newUserType = await userType.create({ description });

    } catch (error) {

    }
}