class Metadata {
    constructor({
        dataVersion, 
        matchID, 
        participants,
    }) {
        this.dataVersion  = dataVersion;
        this.matchID      = matchID;
        this.participants = participants;
    }

    static fromDTO(metadataDTO) {
        return new Metadata({
            dataVersion:  metadataDTO.dataVersion,
            matchID:      metadataDTO.matchId,
            participants: metadataDTO.participants,
        });
    }
};

module.exports = Metadata;
