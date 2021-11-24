class Output {
    constructor(match) {
        this.duracion       = match.duration(match.info.gameDuration);
        this.ventajaOro     = Math.abs(match.goldEarned(match.winnerID) - match.goldEarned(match.loserID));
        this.loserTeamLogo  = "";
        this.winnerTeamLogo = "";
        this.winnerTeamName = "";
        this.loserTeamName  = "";
        this.matchPhase     = "";
        this.tournament     = "";
        this.ganador = {
            seleccion:        match.selection(match.winnerID),
            prohibicion:      match.bans(match.winnerID),
            torre:            match.towers(match.winnerID),
            dragon:           match.dragons(match.winnerID),
            baron:            match.barons(match.winnerID),
            kda:              match.kda(match.winnerID),
            oro:              match.goldEarned(match.winnerID),
            puntosDeVision:   match.visionScore(match.winnerID),
            damage:           match.damage(match.winnerID),
            goldDistribution: match.goldPerChampion(match.winnerID),
        };
        this.perdedor = {
            seleccion:        match.selection(match.loserID),
            prohibicion:      match.bans(match.loserID),
            torre:            match.towers(match.loserID),
            dragon:           match.dragons(match.loserID),
            baron:            match.barons(match.loserID),
            kda:              match.kda(match.loserID),
            oro:              match.goldEarned(match.loserID),
            puntosDeVision:   match.visionScore(match.loserID),
            damage:           match.damage(match.loserID),
            goldDistribution: match.goldPerChampion(match.loserID),
        };
    }
};

module.exports = Output;
