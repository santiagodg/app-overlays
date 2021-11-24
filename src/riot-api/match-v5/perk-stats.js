class PerkStats {
    constructor({
        defense,
        flex,
        offense,
    }) {
        this.defense = defense;
        this.flex    = flex;
        this.offense = offense;
    }

    static fromDTO(perkStatsDTO) {
        return new PerkStats({
            defense: perkStatsDTO.defense,
            flex:    perkStatsDTO.flex,
            offense: perkStatsDTO.offense,
        });
    }
};

module.exports = PerkStats;
