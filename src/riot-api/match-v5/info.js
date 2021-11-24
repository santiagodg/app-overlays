const Participant = require('./participant');
const Team        = require('./team');

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
};

module.exports = Info;
