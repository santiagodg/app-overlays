const Ban        = require('./ban');
const Objectives = require('./objectives');

class Team {
    constructor({
        bans,
        objectives,
        teamID,
        win,
    }) {
        this.bans       = bans;
        this.objectives = objectives;
        this.teamID     = teamID;
        this.win        = win;
    }

    static fromDTO(teamDTO) {
        return new Team({
            bans:       teamDTO.bans.map(banDTO => Ban.fromDTO(banDTO)),
            objectives: Objectives.fromDTO(teamDTO.objectives),
            teamID:     teamDTO.teamId,
            win:        teamDTO.win,
        });
    }
};

module.exports = Team;
