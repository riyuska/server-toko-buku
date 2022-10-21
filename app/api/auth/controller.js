const { user } = require("../../db/models");
const bcrypt = require("bcrypt");

module.exports = {
    signin: async(req, res, next) => {
        try {
            const { email, password } = req.body;
            const checkUser = await User.findOne({ where: { email: email } });

            if (checkUser) {
                const checkPassword = bcrypt.compareSync(password, checkUser.password);

                if (checkPassword) {
                    res.status(200).json({ message: "Success" });
                } else {
                    res.status(404).json({ message: "Invalid Password" });
                }
            } else {
                res.status(404).json({ message: "Invalid Email" });
            }
        } catch (err) {
            console.log(err);
            next(err);
        }
    },
};