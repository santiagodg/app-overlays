const axios = require('axios');

const handle = (promise) => {
    return promise
        .then(data => ([data, undefined]))
        .catch(error => Promise.resolve([undefined, error]));
}

class MatchAPI {
    static async get(matchID) {

        const [response, error] = await handle(axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${process.env.API_KEY}`));

        if (error) {
            console.log(`Failed to get match data through Riot's API: ${error.response.status} ${error.response.statusText}`);

            return null;
        }

        return response.data;
    }
}

module.exports.MatchAPI = MatchAPI;