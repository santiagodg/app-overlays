const PerkStyleSelection = require('./perk-style-selection');

class PerkStyle {
    constructor({
        description,
        selections,
        style,
    }) {
        this.description = description;
        this.selections  = selections;
        this.style       = style;
    }

    static fromDTO(perkStyleDTO) {
        return new PerkStyle({
            description: perkStyleDTO.description,
            selections:  perkStyleDTO.selections.map(perkStyleSelectionDTO => PerkStyleSelection.fromDTO(perkStyleSelectionDTO)),
            style:       perkStyleDTO.style,
        });
    }
};

module.exports = PerkStyle;
