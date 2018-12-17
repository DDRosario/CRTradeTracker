const clanData = require('../secrets/sampleClanData.json');

const tags = clanData.items.map(member => member.tag);

console.log(tags);

module.exports.tags = tags;
