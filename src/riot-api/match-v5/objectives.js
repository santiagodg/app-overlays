const Objective = require('./objective');

class Objectives {
    constructor({
        baron,
        champion,
        dragon,
        inhibitor,
        riftHerald,
        tower,
    }) {
        this.baron      = baron;
        this.champion   = champion;
        this.dragon     = dragon;
        this.inhibitor  = inhibitor;
        this.riftHerald = riftHerald;
        this.tower      = tower;
    }

    static fromDTO(objectivesDTO) {
        return new Objectives({
            baron:      Objective.fromDTO(objectivesDTO.baron),
            champion:   Objective.fromDTO(objectivesDTO.champion),
            dragon:     Objective.fromDTO(objectivesDTO.dragon),
            inhibitor:  Objective.fromDTO(objectivesDTO.inhibitor),
            riftHerald: Objective.fromDTO(objectivesDTO.riftHerald),
            tower:      Objective.fromDTO(objectivesDTO.tower),
        });
    }
};

module.exports = Objectives;
