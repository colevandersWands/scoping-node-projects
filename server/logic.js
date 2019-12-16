const logicRoutes = require('express').Router();
// require the functions from /logic

logicRoutes.get('/replace', async (req, res) => {
  const readFrom = req.body.readFrom;
  const writeTo = req.body.writeTo;
  const oldWord = req.body.oldWord;
  const newWord = req.body.newWord;

  const oldText = await fs.readFile(readFrom, 'utf-8');
  const newText = replaceWord(oldText, oldWord, newWord);

  fs.writeFile(writeTo, newText);

  // send a helpful response
})

// a similar route for remove

// a similar route for anotherLogic


module.exports = logicRoutes;
