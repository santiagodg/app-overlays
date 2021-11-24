const Perks = require('./perks');

class Participant {
    constructor({
        assists,
        baronKills,
        bountyLevel,
        champExperience,
        champLevel,
        championID,
        championName,
        championTransform,
        consumablesPurchased,
        damageDealtToBuildings,
        damageDealtToObjectives,
        damageDealtToTurrets,
        damageSelfMitigated,
        deaths,
        detectorWardsPlaced,
        doubleKills,
        dragonKills,
        firstBloodAssist,
        firstBloodKill,
        firstTowerAssist,
        firstTowerKill,
        gameEndedInEarlySurrender,
        gameEndedInSurrender,
        goldEarned,
        goldSpent,
        individualPosition,
        inhibitorKills,
        inhibitorTakedowns,
        inhibitorsLost,
        item0,
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        itemsPurchased,
        killingSprees,
        kills,
        lane,
        largestCriticalStrike,
        largestKillingSpree,
        largestMultiKill,
        longestTimeSpentLiving,
        magicDamageDealt,
        magicDamageDealtToChampions,
        magicDamageTaken,
        neutralMinionsKilles,
        nexusKills,
        nexusTakedowns,
        nexusLost,
        objectivesStolen,
        objectivesStolenAssists,
        participantID,
        pentaKills,
        perks,
        physicalDamageDealt,
        physicalDamageDealtToChampions,
        physicalDamageTaken,
        profileIcon,
        puuid,
        quadraKills,
        riotIDName,
        riotIDTagline,
        role,
        sightWardsBoughtInGame,
        spell1Casts,
        spell2Casts,
        spell3Casts,
        spell4Casts,
        summoner1Casts,
        summoner1ID,
        summoner2Casts,
        summoner2ID,
        summonerID,
        summonerLevel,
        summonerName,
        teamEarlySurrendered,
        teamID,
        teamPosition,
        timeCCingOthers,
        timePlayed,
        totalDamageDealt,
        totalDamageDealtToChampions,
        totalDamageShieldedOnTeammates,
        totalDamageTaken,
        totalHeal,
        totalHealsOnTeammates,
        totalMinionsKilled,
        totalTimeCCDealt,
        totalTimeSpentDead,
        totalUnitsHealed,
        tripleKills,
        trueDamageDealt,
        trueDamageDealtToChampions,
        trueDamageTaken,
        turretKills,
        turretTakedowns,
        turretsLost,
        unrealKills,
        visionScore,
        visionWardsBoughtInGame,
        wardsKilled,
        wardsPlaced,
        win,
    }) {
        this.assists                        = assists;
        this.baronKills                     = baronKills;
        this.bountyLevel                    = bountyLevel;
        this.champExperience                = champExperience;
        this.champLevel                     = champLevel;
        this.championID                     = championID;
        this.championName                   = championName;
        this.championTransform              = championTransform;
        this.consumablesPurchased           = consumablesPurchased;
        this.damageDealtToBuildings         = damageDealtToBuildings;
        this.damageDealtToObjectives        = damageDealtToObjectives;
        this.damageDealtToTurrets           = damageDealtToTurrets;
        this.damageSelfMitigated            = damageSelfMitigated;
        this.deaths                         = deaths;
        this.detectorWardsPlaced            = detectorWardsPlaced;
        this.doubleKills                    = doubleKills;
        this.dragonKills                    = dragonKills;
        this.firstBloodAssist               = firstBloodAssist;
        this.firstBloodKill                 = firstBloodKill;
        this.firstTowerAssist               = firstTowerAssist;
        this.firstTowerKill                 = firstTowerKill;
        this.gameEndedInEarlySurrender      = gameEndedInEarlySurrender;
        this.gameEndedInSurrender           = gameEndedInSurrender;
        this.goldEarned                     = goldEarned;
        this.goldSpent                      = goldSpent;
        this.individualPosition             = individualPosition;
        this.inhibitorKills                 = inhibitorKills;
        this.inhibitorTakedowns             = inhibitorTakedowns;
        this.inhibitorsLost                 = inhibitorsLost;
        this.item0                          = item0;
        this.item1                          = item1;
        this.item2                          = item2;
        this.item3                          = item3;
        this.item4                          = item4;
        this.item5                          = item5;
        this.item6                          = item6;
        this.itemsPurchased                 = itemsPurchased;
        this.killingSprees                  = killingSprees;
        this.kills                          = kills;
        this.lane                           = lane;
        this.largestCriticalStrike          = largestCriticalStrike;
        this.largestKillingSpree            = largestKillingSpree;
        this.largestMultiKill               = largestMultiKill;
        this.longestTimeSpentLiving         = longestTimeSpentLiving;
        this.magicDamageDealt               = magicDamageDealt;
        this.magicDamageDealtToChampions    = magicDamageDealtToChampions;
        this.magicDamageTaken               = magicDamageTaken;
        this.neutralMinionsKilles           = neutralMinionsKilles;
        this.nexusKills                     = nexusKills;
        this.nexusTakedowns                 = nexusTakedowns;
        this.nexusLost                      = nexusLost;
        this.objectivesStolen               = objectivesStolen;
        this.objectivesStolenAssists        = objectivesStolenAssists;
        this.participantID                  = participantID;
        this.pentaKills                     = pentaKills;
        this.perks                          = perks;
        this.physicalDamageDealt            = physicalDamageDealt;
        this.physicalDamageDealtToChampions = physicalDamageDealtToChampions;
        this.physicalDamageTaken            = physicalDamageTaken;
        this.profileIcon                    = profileIcon;
        this.puuid                          = puuid;
        this.quadraKills                    = quadraKills;
        this.riotIDName                     = riotIDName;
        this.riotIDTagline                  = riotIDTagline;
        this.role                           = role;
        this.sightWardsBoughtInGame         = sightWardsBoughtInGame;
        this.spell1Casts                    = spell1Casts;
        this.spell2Casts                    = spell2Casts;
        this.spell3Casts                    = spell3Casts;
        this.spell4Casts                    = spell4Casts;
        this.summoner1Casts                 = summoner1Casts;
        this.summoner1ID                    = summoner1ID;
        this.summoner2Casts                 = summoner2Casts;
        this.summoner2ID                    = summoner2ID;
        this.summonerID                     = summonerID;
        this.summonerLevel                  = summonerLevel;
        this.summonerName                   = summonerName;
        this.teamEarlySurrendered           = teamEarlySurrendered;
        this.teamID                         = teamID;
        this.teamPosition                   = teamPosition;
        this.timeCCingOthers                = timeCCingOthers;
        this.timePlayed                     = timePlayed;
        this.totalDamageDealt               = totalDamageDealt;
        this.totalDamageDealtToChampions    = totalDamageDealtToChampions;
        this.totalDamageShieldedOnTeammates = totalDamageShieldedOnTeammates;
        this.totalDamageTaken               = totalDamageTaken;
        this.totalHeal                      = totalHeal;
        this.totalHealsOnTeammates          = totalHealsOnTeammates;
        this.totalMinionsKilled             = totalMinionsKilled;
        this.totalTimeCCDealt               = totalTimeCCDealt;
        this.totalTimeSpentDead             = totalTimeSpentDead;
        this.totalUnitsHealed               = totalUnitsHealed;
        this.tripleKills                    = tripleKills;
        this.trueDamageDealt                = trueDamageDealt;
        this.trueDamageDealtToChampions     = trueDamageDealtToChampions;
        this.trueDamageTaken                = trueDamageTaken;
        this.turretKills                    = turretKills;
        this.turretTakedowns                = turretTakedowns;
        this.turretsLost                    = turretsLost;
        this.unrealKills                    = unrealKills;
        this.visionScore                    = visionScore;
        this.visionWardsBoughtInGame        = visionWardsBoughtInGame;
        this.wardsKilled                    = wardsKilled;
        this.wardsPlaced                    = wardsPlaced;
        this.win                            = win;
    }

    static fromDTO(participantDTO) {
        return new Participant({
            assists:                        participantDTO.assists,
            baronKills:                     participantDTO.baronKills,
            bountyLevel:                    participantDTO.bountyLevel,
            champExperience:                participantDTO.champExperience,
            champLevel:                     participantDTO.champLevel,
            championID:                     participantDTO.championId,
            championName:                   participantDTO.championName,
            championTransform:              participantDTO.championTransform,
            consumablesPurchased:           participantDTO.consumablesPurchased,
            damageDealtToBuildings:         participantDTO.damageDealtToBuildings,
            damageDealtToObjectives:        participantDTO.damageDealtToObjectives,
            damageDealtToTurrets:           participantDTO.damageDealtToTurrets,
            damageSelfMitigated:            participantDTO.damageSelfMitigated,
            deaths:                         participantDTO.deaths,
            detectorWardsPlaced:            participantDTO.detectorWardsPlaced,
            doubleKills:                    participantDTO.doubleKills,
            dragonKills:                    participantDTO.dragonKills,
            firstBloodAssist:               participantDTO.firstBloodAssist,
            firstBloodKill:                 participantDTO.firstBloodKill,
            firstTowerAssist:               participantDTO.firstTowerAssist,
            firstTowerKill:                 participantDTO.firstTowerKill,
            gameEndedInEarlySurrender:      participantDTO.gameEndedInEarlySurrender,
            gameEndedInSurrender:           participantDTO.gameEndedInSurrender,
            goldEarned:                     participantDTO.goldEarned,
            goldSpent:                      participantDTO.goldSpent,
            individualPosition:             participantDTO.individualPosition,
            inhibitorKills:                 participantDTO.inhibitorKills,
            inhibitorTakedowns:             participantDTO.inhibitorTakedowns,
            inhibitorsLost:                 participantDTO.inhibitorsLost,
            item0:                          participantDTO.item0,
            item1:                          participantDTO.item1,
            item2:                          participantDTO.item2,
            item3:                          participantDTO.item3,
            item4:                          participantDTO.item4,
            item5:                          participantDTO.item5,
            item6:                          participantDTO.item6,
            itemsPurchased:                 participantDTO.itemsPurchased,
            killingSprees:                  participantDTO.killingSprees,
            kills:                          participantDTO.kills,
            lane:                           participantDTO.lane,
            largestCriticalStrike:          participantDTO.largestCriticalStrike,
            largestKillingSpree:            participantDTO.largestKillingSpree,
            largestMultiKill:               participantDTO.largestMultiKill,
            longestTimeSpentLiving:         participantDTO.longestTimeSpentLiving,
            magicDamageDealt:               participantDTO.magicDamageDealt,
            magicDamageDealtToChampions:    participantDTO.magicDamageDealtToChampions,
            magicDamageTaken:               participantDTO.magicDamageTaken,
            neutralMinionsKilles:           participantDTO.neutralMinionsKilles,
            nexusKills:                     participantDTO.nexusKills,
            nexusTakedowns:                 participantDTO.nexusTakedowns,
            nexusLost:                      participantDTO.nexusLost,
            objectivesStolen:               participantDTO.objectivesStolen,
            objectivesStolenAssists:        participantDTO.objectivesStolenAssists,
            participantID:                  participantDTO.participantId,
            pentaKills:                     participantDTO.pentaKills,
            perks:                          Perks.fromDTO(participantDTO.perks),
            physicalDamageDealt:            participantDTO.physicalDamageDealt,
            physicalDamageDealtToChampions: participantDTO.physicalDamageDealtToChampions,
            physicalDamageTaken:            participantDTO.physicalDamageTaken,
            profileIcon:                    participantDTO.profileIcon,
            puuid:                          participantDTO.puuid,
            quadraKills:                    participantDTO.quadraKills,
            riotIDName:                     participantDTO.riotIdName,
            riotIDTagline:                  participantDTO.riotIdTagline,
            role:                           participantDTO.role,
            sightWardsBoughtInGame:         participantDTO.sightWardsBoughtInGame,
            spell1Casts:                    participantDTO.spell1Casts,
            spell2Casts:                    participantDTO.spell2Casts,
            spell3Casts:                    participantDTO.spell3Casts,
            spell4Casts:                    participantDTO.spell4Casts,
            summoner1Casts:                 participantDTO.summoner1Casts,
            summoner1ID:                    participantDTO.summoner1Id,
            summoner2Casts:                 participantDTO.summoner2Casts,
            summoner2ID:                    participantDTO.summoner2Id,
            summonerID:                     participantDTO.summonerId,
            summonerLevel:                  participantDTO.summonerLevel,
            summonerName:                   participantDTO.summonerName,
            teamEarlySurrendered:           participantDTO.teamEarlySurrendered,
            teamID:                         participantDTO.teamId,
            teamPosition:                   participantDTO.teamPosition,
            timeCCingOthers:                participantDTO.timeCCingOthers,
            timePlayed:                     participantDTO.timePlayed,
            totalDamageDealt:               participantDTO.totalDamageDealt,
            totalDamageDealtToChampions:    participantDTO.totalDamageDealtToChampions,
            totalDamageShieldedOnTeammates: participantDTO.totalDamageShieldedOnTeammates,
            totalDamageTaken:               participantDTO.totalDamageTaken,
            totalHeal:                      participantDTO.totalHeal,
            totalHealsOnTeammates:          participantDTO.totalHealsOnTeammates,
            totalMinionsKilled:             participantDTO.totalMinionsKilled,
            totalTimeCCDealt:               participantDTO.totalTimeCCDealt,
            totalTimeSpentDead:             participantDTO.totalTimeSpentDead,
            totalUnitsHealed:               participantDTO.totalUnitsHealed,
            tripleKills:                    participantDTO.tripleKills,
            trueDamageDealt:                participantDTO.trueDamageDealt,
            trueDamageDealtToChampions:     participantDTO.trueDamageDealtToChampions,
            trueDamageTaken:                participantDTO.trueDamageTaken,
            turretKills:                    participantDTO.turretKills,
            turretTakedowns:                participantDTO.turretTakedowns,
            turretsLost:                    participantDTO.turretsLost,
            unrealKills:                    participantDTO.unrealKills,
            visionScore:                    participantDTO.visionScore,
            visionWardsBoughtInGame:        participantDTO.visionWardsBoughtInGame,
            wardsKilled:                    participantDTO.wardsKilled,
            wardsPlaced:                    participantDTO.wardsPlaced,
            win:                            participantDTO.win,
        });
    }
};

module.exports = Participant;
