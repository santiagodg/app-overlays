class Output {
    constructor(match) {
        this.duracion       = match.info.duration();
        this.ventajaOro     = match.info.goldDifference();
        this.loserTeamLogo  = "";
        this.winnerTeamLogo = "";
        this.winnerTeamName = "";
        this.loserTeamName  = "";
        this.matchPhase     = "";
        this.tournament     = "";
        this.ganador = {
            seleccion:        match.info.teamSelection(match.winnerID),
            prohibicion:      match.info.teamBans(match.winnerID),
            torre:            match.info.teamTowers(match.winnerID),
            dragon:           match.info.teamDragons(match.winnerID),
            baron:            match.info.teamBarons(match.winnerID),
            kda:              match.info.teamKDA(match.winnerID),
            oro:              match.info.teamGoldEarned(match.winnerID),
            puntosDeVision:   match.info.teamVisionScore(match.winnerID),
            damage:           match.info.damagePerChampion(match.winnerID),
            goldDistribution: match.info.goldPerChampion(match.winnerID),
            herald:           match.info.teamHeralds(match.winnerID),
        };
        this.perdedor = {
            seleccion:        match.info.teamSelection(match.loserID),
            prohibicion:      match.info.teamBans(match.loserID),
            torre:            match.info.teamTowers(match.loserID),
            dragon:           match.info.teamDragons(match.loserID),
            baron:            match.info.teamBarons(match.loserID),
            kda:              match.info.teamKDA(match.loserID),
            oro:              match.info.teamGoldEarned(match.loserID),
            puntosDeVision:   match.info.teamVisionScore(match.loserID),
            damage:           match.info.damagePerChampion(match.loserID),
            goldDistribution: match.info.goldPerChampion(match.loserID),
            herald:           match.info.teamHeralds(match.winnerID),
        };
    }
};

module.exports = Output;
