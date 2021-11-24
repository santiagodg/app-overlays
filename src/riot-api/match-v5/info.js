const Participant          = require('./participant');
const Team                 = require('./team');
const { championIDToName } = require('../../champions');

class Info {
    constructor({
        gameCreation,
        gameDuration,
        gameEndTimestamp,
        gameID,
        gameMode,
        gameName,
        gameStartTimestamp,
        gameType,
        gameVersion,
        mapID,
        participants,
        platformID,
        queueID,
        teams,
        tournamentCode,
    }) {
        this.gameCreation       = gameCreation;
        this.gameDuration       = gameDuration;
        this.gameEndTimestamp   = gameEndTimestamp;
        this.gameID             = gameID;
        this.gameMode           = gameMode;
        this.gameName           = gameName;
        this.gameStartTimestamp = gameStartTimestamp;
        this.gameType           = gameType;
        this.gameVersion        = gameVersion;
        this.mapID              = mapID;
        this.participants       = participants;
        this.platformID         = platformID;
        this.queueID            = queueID;
        this.teams              = teams;
        this.tournamentCode     = tournamentCode;

        this.winnerID           = this.#winnerID();
        this.loserID            = this.#loserID();
    }

    static fromDTO(infoDTO) {
        return new Info({
            gameCreation:       infoDTO.gameCreation,
            gameDuration:       infoDTO.gameDuration,
            gameEndTimestamp:   infoDTO.gameEndTimestamp,
            gameID:             infoDTO.gameId,
            gameMode:           infoDTO.gameMode,
            gameName:           infoDTO.gameName,
            gameStartTimestamp: infoDTO.gameStartTimestamp,
            gameType:           infoDTO.gameType,
            gameVersion:        infoDTO.gameVersion,
            mapID:              infoDTO.mapId,
            participants:       infoDTO.participants.map(participantDTO => Participant.fromDTO(participantDTO)),
            platformID:         infoDTO.platformId,
            queueID:            infoDTO.queueId,
            teams:              infoDTO.teams.map(teamDTO => Team.fromDTO(teamDTO)),
            tournamentCode:     infoDTO.tournamentCode,
        });
    }

    teamGoldEarned(teamID) {
        return this.participants
            .filter(participant => participant.teamID === teamID)
            .reduce((accumulatedGold, participant) => {
                return accumulatedGold + participant.goldEarned;
            }, 0);
    }

    teamSelection(teamID) {
        return this.participants
            .filter(participant => participant.teamID === teamID)
            .reduce((selectionList, participant) => {
                selectionList.push({
                    champion: participant.championName,
                    summoner: participant.summonerName,
                });

                return selectionList;
            }, []);
    }

    teamBans(teamID) {
        return this.teams
            .find(team => team.teamID === teamID)
            .bans
            .reduce((banList, ban) => {
                banList.push(championIDToName[ban.championID.toString()]);

                return banList;
            }, []);
    }

    teamTowers(teamID) {
        return this.teams
            .find(team => team.teamID === teamID)
            .objectives.tower.kills;
    }

    teamDragons(teamID) {
        return this.teams
            .find(team => team.teamID === teamID)
            .objectives.dragon.kills;
    }

    teamBarons(teamID) {
        return this.teams
            .find(team => team.teamID === teamID)
            .objectives.baron.kills;
    }

    teamKDA(teamID) {
        return this.participants
            .filter(participant => participant.teamID === teamID)
            .reduce((accumulation, participant) => {
                return {
                    kills:   accumulation.kills + participant.kills,
                    deaths:  accumulation.deaths + participant.deaths,
                    assists: accumulation.assists + participant.assists,
                };
            }, {
                kills: 0, 
                deaths: 0, 
                assists: 0,
            });
    }

    teamVisionScore(teamID) {
        return this.participants
            .filter(participant => participant.teamID === teamID)
            .reduce((accumulatedVisionScore, participant) => {
                return accumulatedVisionScore + participant.visionScore;
            }, 0);
    }

    damagePerChampion(teamID) {
        return this.participants
        .filter(participant => participant.teamID === teamID)
        .reduce((damageList, participant) => {
            damageList.push({
                championName: participant.championName,
                amount:       participant.trueDamageDealt,
            });

            return damageList;
        }, []);
    }

    goldPerChampion(teamID) {
        return this.participants
            .filter(participant => participant.teamID === teamID)
            .reduce((goldPerChampionList, participant) => {
                goldPerChampionList.push({
                    championName: participant.championName,
                    amount:       participant.goldEarned,
                });

                return goldPerChampionList;
            }, []);
    }

    #winnerID() {
        return this.teams
            .find(team => team.win === true)
            .teamID;
    }

    #loserID() {
        return this.teams
            .find(team => team.win === false)
            .teamID;
    }

    duration() {
        const minutes          = Math.floor(this.gameDuration / 60);
        const remainingSeconds = this.gameDuration % 60;

        return `${minutes}:${remainingSeconds}`;
    }

    goldDifference() {
        return Math.abs(this.teamGoldEarned(this.winnerID) - this.teamGoldEarned(this.loserID));
    }

    teamHeralds(teamID) {
        return this.teams
            .find(team => team.teamID === teamID)
            .objectives.riftHerald.kills;
    }
};

module.exports = Info;
