const getDefibrillateurs = "SELECT * FROM defibrillateurs";
const getDefibrillateursById = "SELECT * FROM defibrillateurs WHERE defibrillateur_id = $1";
const addDefibrillateur =
  "INSERT INTO defibrillateurs (serial, locationName, locationAddr, state, electrodesExpiry) VALUES ($1, $2, $3, $4, $5)";
const removeDefibrillateur = "DELETE FROM defibrillateurs WHERE defibrillateur_id = $1 ";
const updateDefibrillateur = "UPDATE defibrillateurs SET locationAddr = $1 WHERE defibrillateur_id = $2";

module.exports = {
  getDefibrillateurs,
  getDefibrillateursById,
  addDefibrillateur,
  removeDefibrillateur,
  updateDefibrillateur
}
