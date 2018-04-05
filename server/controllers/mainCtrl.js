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
    },

    addWorkOrder: (req, res) => {
        const db = req.app.get("db");
        const { type, memo } = req.body;
        const user = req.user.id;
        console.log(req.body);
        db
        .addWorkOrder([req.body.prop_id, type, memo, user])
        .then(response => res.status(200).json(response))
        .catch( () => res.status(500).json())
    },

    getContractors: (req, res) => {
        const db = req.app.get("db");
        console.log(req.user.id, "get contract")
        db
        .getContractors([req.user.id])
        .then(response => res.status(200).json(response))
        .catch( (err) => res.status(500).json(err))
    },

    addContractor: (req, res) => {
        const db = req.app.get("db");
        const { company_name, type, f_name, l_name, phone, email, street, city, state, zip } = req.body;
        console.log(req.body, "add contract");
        db.addContractor([req.user.id, company_name, type, f_name, l_name, phone, email, street, city, state, zip ])
        .then(response => res.status(200).json(response))
        .catch( (err) => res.status(500).json(err))
    },

    addExpenses: (req, res) => {
        const db = req.app.get("db");
        const { assessed_value, down_payment, monthly_mortgage, monthly_dues, monthly_taxes, monthly_insurance, monthly_utilities } = req.body;
        console.log(req.body, "expenses");
        db
        .addExpenses([ assessed_value, down_payment, monthly_mortgage, monthly_dues, monthly_taxes, monthly_insurance, monthly_utilities, req.body.id])
        .then(response => res.status(200).json(response))
        .catch( () => res.status(500).json())
    },
    
    deleteProperty: (req, res) => {
        console.log("deleteProperty req object: ",req.body);
        const db = req.app.get("db");
        db.deleteProperty([req.body.id]).then(response => {
            res.status(200).json(response);

        }).catch( (err) => {
            res.status(500).json(err);
        });
    },

    addTenants: (req, res) => {
        const db = req.app.get("db");
        const { f_name, l_name, phone, email, emerg_contact_name, emerg_contact_phone} = req.body;
        db
        .addTenant([f_name, l_name, phone, email, emerg_contact_name, emerg_contact_phone, req.body.prop_id, req.body.id])
        .then(response => res.status(200).json(response))
        .catch( () => res.status(500).json())
    }

}
    getWorkOrders: (req, res) => {
        const user = req.user.id;
       
        const db = req.app.get("db");
        db.getWorkOrders([user]).then(response => {
            res.status(200).json(response);
        }).catch( (err) => {
            res.status(500).json(err);
        });
    }
}
