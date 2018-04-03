

module.exports = {
    getProperties: (req, res) => {
        console.log("hit properties")
        const db = req.app.get("db");
        db
        .getProperties()
        .then(response => {
            console.log(response, "hello")
            res.status(200).json(response)})
        .catch( (err) => res.status(500).json(err));
    }
}