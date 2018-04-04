module.exports = {
    getProperties: (req, res) => {
        console.log("hit properties")
        const db = req.app.get("db");
        db
        .getProperties([req.user.id])
        .then(response => {
            console.log("all properties for curr user:", response);
            res.status(200).json(response)})
        .catch( (err) => res.status(500).json(err));
    },

    addProperty: (req, res) => {
        const db = req.app.get("db");
        const { prop_name, street, city, state, zip , img } = req.body;
        console.log(req.body);
        db
        .addProperty([req.user.id, prop_name, street, city, state, zip, img ])
        .then(response => res.status(200).json(response))
        .catch( () => res.status(500).json())
    },

    getProperty: (req, res) => {
        const db = req.app.get("db");
        console.log(req.params.id, "req params")
        db
        .getProperty([req.params.id])
        .then(response => res.status(200).json(response))
        .catch( () => res.status(500).json())
    }
}