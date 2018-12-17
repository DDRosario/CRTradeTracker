const axios = require('axios');
const { clanTag } = require('../secrets/clanTag.js');

axios
  .get(`https://api.clashroyale.com/v1/clans/${clanTag}/members`)
  .then(clanData => {
    var members = clanData.items.map(member => member.tag);
    console.log(members);
  })
  .catch(err => {
    console.log('Was not able to get members', err);
  });
