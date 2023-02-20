class userController {
    createUser = (req, res) => {
        console.log(req.body); //porque lo recogemos en el body
        const data = JSON.parse(req.body.dataCat); // aquí se parsea lo del front
        console.log(data.name);
        res.status(200).json("todo ok");
    }
    getAllUsers = (req, res) => {
        let allUsers = {
            data: [
                {name: "santi", email: "s@s"},
                {name: "raquel", email: "r@r"}
            ]
        }
        res.status(200).jason(allUsers);
    }
}

module.exports = new userController();