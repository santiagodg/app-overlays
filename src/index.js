require('dotenv').config();

const express = require('express');

const { MatchAPI } = require('./lol/lol');
const { championIDToName } = require('./champions');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.urlencoded());

app.use(express.static('src/public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/output', async (req, res) => {
    const matchData = await MatchAPI.get('LA1_1166928407');

    if (matchData === null) {
        console.log('Failed to get match data.');

        return res.sendStatus(404);
    }

    const goldEarned = (teamID) => {
        return matchData.info.participants.reduce((prev, curr) => {
            if (curr.teamId === teamID) {
                return prev + curr.goldEarned;
            }

            return prev;
        }, 0);
    };

    const seleccion = (teamID) => {
        return matchData.info.participants.reduce((prev, curr) => {
            if (curr.teamId === teamID) {
                prev.push(curr.championName);
            }

            return prev;
        }, []);
    }

    const prohibicion = (teamID) => {
        return matchData.info.teams.reduce((prev, curr) => {
            if (curr.teamId === teamID) {
                prev = curr.bans.reduce((prev2, curr2) => {
                    prev2.push(championIDToName[curr2.championId.toString()]);

                    return prev2;
                }, []);
            }
            return prev;
        }, []);
    }

    const torres = (teamID) => {
        return matchData.info.teams.reduce((prev, curr) => {
            if (curr.teamId !== teamID) {
                return prev;
            }

            return curr.objectives.tower.kills;
        }, 0);
    }

    const dragon = (teamID) => {
        return matchData.info.teams.reduce((prev, curr) => {
            if (curr.teamId !== teamID) {
                return prev;
            }

            return curr.objectives.dragon.kills;
        }, 0);
    }

    const baron = (teamID) => {
        return matchData.info.teams.reduce((prev, curr) => {
            if (curr.teamId !== teamID) {
                return prev;
            }

            return curr.objectives.baron.kills;
        }, 0);
    }

    const kda = (teamID) => {
        return matchData.info.participants.reduce((prev, curr) => {
            if (curr.teamId !== teamID) {
                return prev;
            }

            return {
                kills: prev.kills + curr.kills,
                deaths: prev.deaths + curr.deaths,
                assists: prev.assists + curr.assists,
            };
        }, { kills: 0, deaths: 0, assists: 0 });
    }

    const visionScore = (teamID) => {
        return matchData.info.participants.reduce((prev, curr) => {
            if (curr.teamId !== teamID) {
                return prev;
            }

            return prev + curr.visionScore;
        }, 0);
    }

    const damage = (teamID) => {
        return matchData.info.participants.reduce((prev, curr) => {
            if (curr.teamId !== teamID) {
                return prev;
            }

            prev.push({ championName: curr.championName, amount: curr.trueDamageDealt });

            return prev;
        }, []);
    }

    const winnerID = (() => {
        return matchData.info.teams.reduce((prev, curr) => {
            if (curr.win !== true) {
                return prev;
            }

            return curr.teamId;
        }, 0);
    })();

    const loserID = (() => {
        return matchData.info.teams.reduce((prev, curr) => {
            if (curr.win !== false) {
                return prev;
            }

            return curr.teamId;
        }, 0);
    })();

    const duration = (sec) => {
        const minutes = Math.floor(sec / 60);

        const seconds = sec % 60;

        return `${minutes}:${seconds}`;
    }

    const result = {
        duracion: duration(matchData.info.gameDuration),
        ventajaOro: Math.abs(goldEarned(winnerID) - goldEarned(loserID)),
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
        },
      }

    res.render('output', { data: result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
