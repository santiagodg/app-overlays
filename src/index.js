require('dotenv').config()
const util = require('util')
const path = require('path')

const bodyParser = require('body-parser')
const express = require('express')

const { MatchAPI } = require('./lol/lol')
const { championIDToName } = require('./champions')

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

const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use(express.static('src/public'))

app.get('/', (req, res) => {
  return res.render('home')
})

const logosUpload = upload.fields([
  { name: 'winnerTeamLogo', maxCount: 1 },
  { name: 'loserTeamLogo', maxCount: 1 },
])
app.post('/output', logosUpload, async (req, res, next) => {
  const matchData = await MatchAPI.get(req.body.matchId)

  if (matchData === null) {
    console.log('Failed to get match data.')

    return res.sendStatus(404)
  }

  const goldEarned = (teamID) => {
    return matchData.info.participants.reduce((prev, curr) => {
      if (curr.teamId === teamID) {
        return prev + curr.goldEarned
      }

      return prev
    }, 0)
  }

  const seleccion = (teamID) => {
    return matchData.info.participants.reduce((prev, curr) => {
      if (curr.teamId === teamID) {
        prev.push(curr.championName)
      }

      return prev
    }, [])
  }

  const prohibicion = (teamID) => {
    return matchData.info.teams.reduce((prev, curr) => {
      if (curr.teamId === teamID) {
        prev = curr.bans.reduce((prev2, curr2) => {
          prev2.push(championIDToName[curr2.championId.toString()])

          return prev2
        }, [])
      }
      return prev
    }, [])
  }

  const torres = (teamID) => {
    return matchData.info.teams.reduce((prev, curr) => {
      if (curr.teamId !== teamID) {
        return prev
      }

      return curr.objectives.tower.kills
    }, 0)
  }

  const dragon = (teamID) => {
    return matchData.info.teams.reduce((prev, curr) => {
      if (curr.teamId !== teamID) {
        return prev
      }

      return curr.objectives.dragon.kills
    }, 0)
  }

  const baron = (teamID) => {
    return matchData.info.teams.reduce((prev, curr) => {
      if (curr.teamId !== teamID) {
        return prev
      }

      return curr.objectives.baron.kills
    }, 0)
  }

  const kda = (teamID) => {
    return matchData.info.participants.reduce(
      (prev, curr) => {
        if (curr.teamId !== teamID) {
          return prev
        }

        return {
          kills: prev.kills + curr.kills,
          deaths: prev.deaths + curr.deaths,
          assists: prev.assists + curr.assists,
        }
      },
      { kills: 0, deaths: 0, assists: 0 }
    )
  }

  const visionScore = (teamID) => {
    return matchData.info.participants.reduce((prev, curr) => {
      if (curr.teamId !== teamID) {
        return prev
      }

      return prev + curr.visionScore
    }, 0)
  }

  const damage = (teamID) => {
    return matchData.info.participants.reduce((prev, curr) => {
      if (curr.teamId !== teamID) {
        return prev
      }

      prev.push({
        championName: curr.championName,
        amount: curr.trueDamageDealt,
      })

      return prev
    }, [])
  }

  const goldPerChampion = (teamID) => {
    return matchData.info.participants.reduce((prev, curr) => {
      if (curr.teamId !== teamID) {
        return prev
      }

      prev.push({
        championName: curr.championName,
        amount: curr.goldEarned,
      })

      return prev
    }, [])
  }

  const winnerID = (() => {
    return matchData.info.teams.reduce((prev, curr) => {
      if (curr.win !== true) {
        return prev
      }
      
      return curr.teamId
    }, 0)
  })()

  const loserID = (() => {
    return matchData.info.teams.reduce((prev, curr) => {
      if (curr.win !== false) {
        return prev
      }

      return curr.teamId
    }, 0)
  })()

  const duration = (sec) => {
    const minutes = Math.floor(sec / 60)

    const seconds = sec % 60

    return `${minutes}:${seconds}`
  }

  const result = {
    duracion: duration(matchData.info.gameDuration),
    ventajaOro: Math.abs(goldEarned(winnerID) - goldEarned(loserID)),
    loserTeamLogo: req.files.loserTeamLogo[0].filename,
    winnerTeamLogo: req.files.winnerTeamLogo[0].filename,
    winnerTeamName: req.body.winnerTeamName,
    loserTeamName: req.body.loserTeamName,
    matchPhase: req.body.matchPhase,
    tournament: req.body.tournament,
    ganador: {
      seleccion: seleccion(winnerID),
      prohibicion: prohibicion(winnerID),
      torre: torres(winnerID),
      dragon: dragon(winnerID),
      baron: baron(winnerID),
      kda: kda(winnerID),
      oro: goldEarned(winnerID),
      puntosDeVision: visionScore(winnerID),
      damage: damage(winnerID),
      goldDistribution: goldPerChampion(winnerID),
    },
    perdedor: {
      seleccion: seleccion(loserID),
      prohibicion: prohibicion(loserID),
      torre: torres(loserID),
      dragon: dragon(loserID),
      baron: baron(loserID),
      kda: kda(loserID),
      oro: goldEarned(loserID),
      puntosDeVision: visionScore(loserID),
      damage: damage(loserID),
      goldDistribution: goldPerChampion(loserID),
    },
  }
  res.render('output', { data: result })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
