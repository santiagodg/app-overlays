const axios = require('axios');

const Match      = require('./match');
const { handle } = require('../../util');

class MatchV5 {
    static async matchByMatchID(matchID) {
        const [response, error] = await handle(axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${process.env.API_KEY}`));

        if (error) {
            return Promise.reject(`Failed to get match data for MatchID ${matchID}: ${error.response.status} ${error.response.statusText}`);
        }

        return Match.fromDTO(response.data);
    }
}

module.exports = MatchV5;
