const PerkStats = require('./perk-stats');
const PerkStyle = require('./perk-style');

class Perks {
    constructor({
        statPerks,
        styles,
    }) {
        this.statPerks = statPerks;
        this.styles    = styles;
    }

    static fromDTO(perksDTO) {
        return new Perks({
            statPerks: PerkStats.fromDTO(perksDTO.statPerks),
            styles:    perksDTO.styles.map(perkStyleDTO => PerkStyle.fromDTO(perkStyleDTO)),
        });
    }
};

module.exports = Perks;
