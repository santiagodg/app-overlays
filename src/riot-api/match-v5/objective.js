class Objective {
    constructor({
        first,
        kills,
    }) {
        this.first = first;
        this.kills = kills;
    }

    static fromDTO(objectiveDTO) {
        return new Objective({
            first: objectiveDTO.first,
            kills: objectiveDTO.kills,
        });
    }
};

module.exports = Objective;
