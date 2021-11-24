class PerkStyleSelection {
    constructor({
        perk,
        var1,
        var2,
        var3,
    }) {
        this.perk = perk;
        this.var1 = var1;
        this.var2 = var2;
        this.var3 = var3;
    }

    static fromDTO(perkStyleSelectionDTO) {
        return new PerkStyleSelection({
            perk: perkStyleSelectionDTO.perk,
            var1: perkStyleSelectionDTO.var1,
            var2: perkStyleSelectionDTO.var2,
            var3: perkStyleSelectionDTO.var3,
        });
    }
};

module.exports = PerkStyleSelection;
