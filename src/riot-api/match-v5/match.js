const Metadata = require('./metadata');
const Info     = require('./info');

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

    get winnerID() {
        return this.info.winnerID;
    }

    get loserID() {
        return this.info.loserID;
    }
};

module.exports = Match;
