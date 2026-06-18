const Mongoose = require('mongoose');
require('../models/travlr');

const Model = Mongoose.model('trips');

const tripsList = async (req, res) => {
  const q = await Model
    .find({})
    .exec();

  if (!q || q.length === 0) {
    return res
      .status(404)
      .json({ message: 'No trips found' });
  }

  return res
    .status(200)
    .json(q);
};

const tripsFindByCode = async (req, res) => {
  const q = await Model
    .find({ code: req.params.tripCode })
    .exec();

  if (!q || q.length === 0) {
    return res
      .status(404)
      .json({ message: 'No trip found with that code' });
  }

  return res
    .status(200)
    .json(q);
};

const tripsAddTrip = async (req, res) => {
  const newTrip = new Model({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
  });

  const q = await newTrip.save();

  if (!q) {
    return res
      .status(400)
      .json({ message: 'Unable to add trip' });
  } else {
    return res
      .status(201)
      .json(q);
  }
};

// PUT: /trips/:tripCode - Adds a new Trip 
// // Regardless of outcome, response must include HTML status code 
// // and JSON message to the requesting client 

const tripsUpdateTrip = async(req, res) => {      
    // Uncomment for debugging     
    // console.log(req.params);     
    // console.log(req.body);      
    const q = await Model         
        .findOneAndUpdate(             
            { 'code' : req.params.tripCode },             
            {                 
                code: req.body.code,                 
                name: req.body.name,                 
                length: req.body.length,                 
                start: req.body.start,                 
                resort: req.body.resort,                 
                perPerson: req.body.perPerson,                 
                image: req.body.image,                 
                description: req.body.description             
            }          
        )         
        .exec();                  
        if(!q)         
            { // Database returned no data             
            return res                 
                .status(400)                 
                .json(err);       
            } else { // Return resulting updated trip             
            return res                 
                .status(201)                 
                .json(q);         
            }                             
            // Uncomment the following line to show results of operation         
            // // on the console         
            // // console.log(q); 
}; 

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};