const pool = require('../../database/databasepg');
const queries = require('../defibrillateur/queries');

const getDefibrillateurs = (req, res) => {
  pool.query(queries.getDefibrillateurs, (err, results) => {
      if(err) throw err;
      res.status(200).json(results.rows);
  })
}

const addDefibrillateur = (req, res) => {
  const { serial, locationName, locationAddr, state, electrodesExpiry } = req.body;

  pool.query(
    queries.addDefibrillateur,
    [serial, locationName, locationAddr, state, electrodesExpiry], (err, results) => {
      if(err) throw err;
      res.status(201).send("Defibrillateur Created Successfully");
    })
}

const getDefibrillateursById = (req, res) => {
  const defibrillateur_id = parseInt(req.params.id);
  pool.query(queries.getDefibrillateursById, [defibrillateur_id], (err, results) => {
      if(err) throw err;
      res.status(200).json(results.rows);
  })
}

const updateDefibrillateur = (req, res) => {
  const defibrillateur_id = parseInt(req.params.id);
  const locationAddr = req.body;

  pool.query(queries.getDefibrillateursById, [defibrillateur_id], (err, results) => {
    const noDefibrillateurFound = !results.rows.length;
    if(noDefibrillateurFound) {
      res.send("Defibrillateur doesn't exist in the database");
    }

    pool.query(queries.updateDefibrillateur, [locationAddr, defibrillateur_id], (err, results) => {
    if(err) throw err;
      res.status(200).send("Defibrillateur Updated Successfully");
    })
  })
}

const removeDefibrillateur = (req, res) => {
  const defibrillateur_id  = parseInt(req.params.id);
  pool.query(queries.removeDefibrillateur, [defibrillateur_id], (err, results) => {
    const noDefibrillateurFound = !results.rows.length;

    pool.query(queries.removeDefibrillateur, [defibrillateur_id], (err, results) => {
      if(err) throw err;
      res.status(200).send("Defibrillateur Removed Successfully");
    })
  })
}


module.exports = {
  getDefibrillateurs,
  getDefibrillateursById,
  addDefibrillateur,
  removeDefibrillateur,
  updateDefibrillateur,
}
