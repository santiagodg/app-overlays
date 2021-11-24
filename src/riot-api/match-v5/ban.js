class Ban {
    constructor({
        championID,
        pickTurn,
    }) {
        this.championID = championID;
        this.pickTurn   = pickTurn;
    }

    static fromDTO(banDTO) {
        return new Ban({
            championID: banDTO.championId,
            pickTurn:   banDTO.pickTurn,
        });
    }
};

module.exports = Ban;
