const response = {
    status: false,
    message: "",
    data: [],
};

const attributeAuthor = ['username', 'email', 'profile']

class AuthorController {

    static async getAuthors(req, res) {
        try {
            const findauthors = await authors.findAll({
                attributes: attributeAuthor,
                include: [{
                    model: posts,
                    include: [{
                        model: comments
                    }]
                }]
            });
            if (findauthors.length !== 0) {
                response.data = findauthors;
                response.status = true;
                response.message = "There is data!"
                res.status(200).json(response);
            } else {
                response.data = '';
                response.status = false;
                response.message = `There isn't data!`;
                res.status(400).json(response);
            }
        } catch (err) {
            response.data = '';
            response.status = false;
            response.message = err.message;
            res.status(400).json(response);
        }
    }

    static async saveAuthor(req, res) {
        const {
            body: {
                username,
                password,
                salt,
                email,
                profile
            }
        } = req;

        try {
            const saveAuthor = await authors.create({
                username,
                password,
                salt,
                email,
                profile
            });
            response.data = {
                Username: saveAuthor.username,
                Salt: saveAuthor.salt,
                email: saveAuthor.email,
                Profile: saveAuthor.profile
            };
            response.status = true;
            response.message = "Success to add Data!"
            res.status(201).json(response);
        } catch (error) {
            response.status = "Failed to add data!";
            response.data = '';
            response.message = error.message;
            res.status(400).json(response);
        }
    }


}

module.exports = AuthorController;