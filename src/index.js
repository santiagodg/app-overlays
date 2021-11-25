require('dotenv').config()
const util = require('util')
const path = require('path')
const { handle } = require('./util')

const bodyParser = require('body-parser')
const express = require('express')

const RiotAPI = require('./riot-api')
const Output = require('./output')

const multer = require('multer')

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(`${__dirname}/public/uploads`))
  },
  filename: (req, file, callback) => {
    const match = ['image/png', 'image/jpeg']

    if (match.indexOf(file.mimetype) === -1) {
      var message = `${file.originalname} is invalid. Only accept png/jpeg.`
      return callback(message, null)
    }

    var filename = `${file.originalname}`
    callback(null, filename)
  },
})

const upload = multer({ storage: storage })

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use(express.static('src/public'))

app.get('/', (req, res) => {
  return res.render('home')
})

app.get('/socialMedia', (req, res) => {
  return res.render('socialMedia')
})

const logosUpload = upload.fields([
  { name: 'winnerTeamLogo', maxCount: 1 },
  { name: 'loserTeamLogo', maxCount: 1 },
])

const overlayOutput = async (req, res) => {
  const [match, matchError] = await handle(
    RiotAPI.MatchV5.matchByMatchID(req.body.matchId)
  )

  if (matchError) {
    console.log(matchError)

    return res.sendStatus(404)
  }

  const output = new Output(match)

  output.loserTeamLogo = req.files.loserTeamLogo[0].filename
  output.winnerTeamLogo = req.files.winnerTeamLogo[0].filename
  output.winnerTeamName = req.body.winnerTeamName
  output.loserTeamName = req.body.loserTeamName
  output.matchPhase = req.body.matchPhase
  output.tournament = req.body.tournament

  return res.render('overlay', { data: output })
}

const socialMediaOutput = async (req, res) => {
  const [match, matchError] = await handle(
    RiotAPI.MatchV5.matchByMatchID(req.body.matchId)
  )

  if (matchError) {
    console.log(matchError)

    return res.sendStatus(404)
  }

  const output = new Output(match)

  output.loserTeamLogo = req.files.loserTeamLogo[0].filename
  output.winnerTeamLogo = req.files.winnerTeamLogo[0].filename
  output.winnerTeamName = req.body.winnerTeamName
  output.loserTeamName = req.body.loserTeamName
  output.matchPhase = req.body.matchPhase
  output.tournament = req.body.tournament

  return res.render('socialMedia', { data: output })
}

app.post('/output', logosUpload, async (req, res) => {
  if (req.body.overlay !== undefined) {
    return overlayOutput(req, res)
  } else if (req.body.socialMedia !== undefined) {
    return socialMediaOutput(req, res)
  }

  console.error('Output selection unknown')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
