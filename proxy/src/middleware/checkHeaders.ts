module.exports = function checkHeaders(req, res, next) {

    if (req.headers.authorization) {

        next();

    } else {

        res.status(400).json({"Type": "Erreur", "Status": false, "Message": "Il n'y a pas le token dans l'authorization!"});

    }

}