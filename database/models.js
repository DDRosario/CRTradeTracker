const mongoose = require('mongoose');
const db = require('./index.js');

const userSchema = mongoose.Schema({
  tag: String,
  name: String
});

const User = mongoose.model('User', userSchema);
module.exports = { User };
/* example data set!

{
  "tag": "string",
  "name": "string",
  "expLevel": 0,
  "trophies": 0,
  "arena": {
    "id": 0,
    "name": "string"
  },
  "bestTrophies": 0,
  "wins": 0,
  "losses": 0,
  "battleCount": 0,
  "threeCrownWins": 0,
  "challengeCardsWon": 0,
  "challengeMaxWins": 0,
  "tournamentCardsWon": 0,
  "tournamentBattleCount": 0,
  "role": "string",
  "donations": 0,
  "donationsReceived": 0,
  "totalDonations": 0,
  "warDayWins": 0,
  "clanCardsCollected": 0,
  "clan": {
    "tag": "string",
    "name": "string",
    "badgeId": 0
  },
  "leagueStatistics": {
    "currentSeason": {
      "id": "string",
      "trophies": 0,
      "bestTrophies": 0
    },
    "previousSeason": {
      "id": "string",
      "trophies": 0,
      "bestTrophies": 0
    },
    "bestSeason": {
      "id": "string",
      "trophies": 0,
      "bestTrophies": 0
    }
  },
  "achievements": [
    {
      "name": "string",
      "stars": 0,
      "value": 0,
      "target": 0,
      "info": "string"
    }
  ],
  "cards": [
    {
      "name": "string",
      "level": 0,
      "maxLevel": 0,
      "count": 0,
      "iconUrls": {
        "medium": "string"
      }
    }
  ],
  "currentFavouriteCard": {
    "name": "string",
    "id": 0,
    "maxLevel": 0,
    "iconUrls": {
      "medium": "string"
    }
  }
}
*/
