const Clarifai = require('clarifai')

const app = new Clarifai.App({
  apiKey: '9c0bf4a90e004088bbf8c3d58e3d1924'
})

const handleApi = (req, res) => {
  app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data)
    })
    .catch(err => res.status(400).json('Unable to fetch API'))
}

const handleImage = (req, res, db) => {
  const {id} = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0])
  })
  .catch(err => res.status(400).json('Unable to get entries'))
}

module.exports = {
  handleImage,
  handleApi
};