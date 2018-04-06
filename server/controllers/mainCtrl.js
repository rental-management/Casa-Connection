module.exports = {
    getProperties: (req, res) => {
       
        const db = req.app.get("db");
        db
        .getProperties([req.user.id])
        .then(response => {
         
            res.status(200).json(response)})
        .catch( (err) => res.status(500).json(err));
    },

    addProperty: (req, res) => {
        const db = req.app.get("db");
        const { prop_name, street, city, state, zip , img, t_f_name, t_l_name, t_phone, t_email, emerg_contact_name, emerg_contact_phone } = req.body;
        console.log(req.body);
        db
        .addProperty([req.user.id, prop_name, street, city, state, zip, img, t_f_name, t_l_name, t_phone, t_email, emerg_contact_name, emerg_contact_phone ])
        .then(response => res.status(200).json(response))
        .catch( () => res.status(500).json())
    },

    getProperty: (req, res) => {
        const db = req.app.get("db");
       
        db
        .getProperty([req.params.id])
        .then(response => res.status(200).json(response))
        .catch( () => res.status(500).json())
    },

    addWorkOrder: (req, res) => {
        const db = req.app.get("db");
        const { type, memo } = req.body;
        const user = req.user.id;
     
        db
        .addWorkOrder([req.body.prop_id, type, memo, user])
        .then(response => res.status(200).json(response))
        .catch( () => res.status(500).json())
    },

    getContractors: (req, res) => {
        const db = req.app.get("db");
       
        db
        .getContractors([req.user.id])
        .then(response => res.status(200).json(response))
        .catch( (err) => res.status(500).json(err))
    },

    addContractor: (req, res) => {
        const db = req.app.get("db");
        const { prop_name, company_name, type, f_name, l_name, phone, email, street, city, state, zip } = req.body;
        console.log(req.body, "add contract");
        db.addContractor([req.user.id, prop_name, company_name, type, f_name, l_name, phone, email, street, city, state, zip ])
        .then(response => res.status(200).json(response))
        .catch( (err) => res.status(500).json(err))
    },

    addExpenses: (req, res) => {
        const db = req.app.get("db");
        const { assessed_value, down_payment, monthly_mortgage, monthly_dues, monthly_taxes, monthly_insurance, monthly_utilities } = req.body;
     
        db
        .addExpenses([ assessed_value, down_payment, monthly_mortgage, monthly_dues, monthly_taxes, monthly_insurance, monthly_utilities, req.body.id])
        .then(response => res.status(200).json(response))
        .catch( () => res.status(500).json())
    },
    
    deleteProperty: (req, res) => {      
        const db = req.app.get("db");
        db.deleteProperty([req.body.id]).then(response => {
            res.status(200).json(response);

        }).catch( (err) => {
            res.status(500).json(err);
        });
    },

    getWorkOrders: (req, res) => {        
        const db = req.app.get("db");        
        db.getWorkOrders([req.body.prop_id]).then(response => {         
            res.status(200).json(response);
        }).catch( (err) => {
            res.status(500).json(err);
        });
    },

    getExpensesById: (req, res) => {
        const db = req.app.get("db");        
        db.getExpensesById([req.body.prop_id]).then( (response) => {
            res.status(200).json(response);
        }).catch( (err) => {
            res.status(500).json(err);
        })},

    deleteWorkOrders: (req, res) => {
        const db = req.app.get("db");
        db
        .deleteWorkOrders([req.body.prop_id])
        .then(response => res.status(200).json(response))
        .catch( () => res.status(500).json())
    },

    getTenant: (req, res) => {
        const db = req.app.get("db");
        db.getProperty(req.body.prop_id).then( (response) => {
            res.status(200).json(response);
        }).catch( () => {res.status(500).json()})
    }
}
