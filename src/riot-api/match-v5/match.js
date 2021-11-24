const Metadata             = require('./metadata');
const Info                 = require('./info');
const { championIDToName } = require('../../champions');

class Match {
    constructor({
        metadata,
        info,
    }) {
        this.metadata = metadata;
        this.info     = info;
    }

    static fromDTO(matchDTO) {
        return new Match({
            metadata: Metadata.fromDTO(matchDTO.metadata),
            info:     Info.fromDTO(matchDTO.info),
        });
    }

    goldEarned(teamID) {
        return this.info.participants.reduce((accumulatedGold, participant) => {
            if (participant.teamID === teamID) {
                return accumulatedGold + participant.goldEarned;
            }

            return accumulatedGold;
        }, 0);
    }

    selection(teamID) {
        return this.info.participants.reduce((selectionList, participant) => {
            if (participant.teamID === teamID) {
                selectionList.push(participant.championName);
            }

            return selectionList;
        }, []);
    }

    bans(teamID) {
        return this.info.teams.reduce((banList1, team) => {
            if (team.teamID === teamID) {
                banList1 = team.bans.reduce((banList2, ban) => {
                    banList2.push(championIDToName[ban.championID.toString()]);

                    return banList2;
                }, []);
            }

            return banList1;
        }, []);
    }

    towers(teamID) {
        return this.info.teams.reduce((towersAmount, team) => {
            if (team.teamID !== teamID) {
                return towersAmount;
            }
      
            return team.objectives.tower.kills;
        }, 0);
    }

    dragons(teamID) {
        return this.info.teams.reduce((dragonsAmount, team) => {
            if (team.teamID !== teamID) {
                return dragonsAmount;
            }

            return team.objectives.dragon.kills;
        }, 0);
    }

    barons(teamID) {
        return this.info.teams.reduce((baronsAmount, team) => {
            if (team.teamID !== teamID) {
                return baronsAmount;
            }

            return team.objectives.baron.kills;
        }, 0);
    }

    kda(teamID) {
        return this.info.participants.reduce((accumulation, participant) => {
                if (participant.teamID !== teamID) {
                    return accumulation;
                }

                return {
                    kills:   accumulation.kills + participant.kills,
                    deaths:  accumulation.deaths + participant.deaths,
                    assists: accumulation.assists + participant.assists,
                };
            }, { 
                kills: 0, 
                deaths: 0, 
                assists: 0 
            }
        );
    }

    visionScore(teamID) {
        return this.info.participants.reduce((accumulatedVisionScore, participant) => {
            if (participant.teamID !== teamID) {
                return accumulatedVisionScore;
            }

            return accumulatedVisionScore + participant.visionScore;
        }, 0);
    }

    damage(teamID) {
        return this.info.participants.reduce((damageList, participant) => {
            if (participant.teamID !== teamID) {
                return damageList;
            }

            damageList.push({
                championName: participant.championName,
                amount:       participant.trueDamageDealt,
            });

            return damageList;
        }, []);
    }

    goldPerChampion(teamID) {
        return this.info.participants.reduce((goldPerChampionList, participant) => {
            if (participant.teamID !== teamID) {
                return goldPerChampionList;
            }

            goldPerChampionList.push({
                championName: participant.championName,
                amount:       participant.goldEarned,
            });

            return goldPerChampionList;
        }, []);
    }

    get winnerID() {
        return this.info.teams.reduce((winnerID, team) => {
            if (team.win !== true) {
                return winnerID;
            }

            return team.teamID;
        }, 0);
    }

    get loserID() {
        return this.info.teams.reduce((winnerID, team) => {
            if (team.win !== false) {
                return winnerID;
            }

            return team.teamID;
        }, 0);
    }

    duration(seconds) {
        const minutes          = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return `${minutes}:${remainingSeconds}`;
    }
};

module.exports = Match;
