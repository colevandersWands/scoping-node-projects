const filesRoutes = require('express').Router();


filesRoutes.get('/all', (req, res) => {
  // send a list of all file names in /files
})

filesRoutes.get('/:name', (req, res) => {
  // return the text from the file with that name
  // or an error if it doesn't exist
})

filesRoutes.post('/', (req, res) => {
  const newFileName = req.body.fileName;
  const newText = req.body.text;

  // check if the file exists
  //  create it if it doesn't and send ok
  //  send an error if the file already exists
})

filesRoutes.put('/', (req, res) => {
  const fileName = req.body.fileName;
  const newText = req.body.text;

  // check if the file exists
  //  update it if it doesn't and send ok
  //  send an error if the file doesn't exist
})


filesRoutes.delete() // delete the given file

module.exports = filesRoutes;
