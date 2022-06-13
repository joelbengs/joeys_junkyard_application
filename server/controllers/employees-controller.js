//This controller will let express interact with the employee table in the database

// Import database
const knex = require('./../db');

//get all employees from database, using asyncronus function.
//req is a json containing data (needed when eq adding employee)
//res is the promise response object
exports.employeesAll = async(req, res) => {
    knex.select('*')
    .from('employees')
    .then(userData => {
        res.json(userData)
    })
    .catch(err => {
        res.json({ message: `There was an error retrieving books: ${err}` })
    })
};

exports.employeesCreate = async(req, res) => {
    knex('employees')
    .insert({
        'name': req.body.name,
        'sales': req.body.sales
    })
    .then(() => {
        // Send a success message in response
        res.json({ message: `Employee \'${req.body.name}\' with sales of ${req.body.sales} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.name} employee: ${err}` })
      })
  };