const fs = require('fs');
const counterFile = 'visits.txt';

exports.trackVisit = (req, res) => {
    let count = 0;
    if (fs.existsSync(counterFile)) {
        count = parseInt(fs.readFileSync(counterFile, 'utf8')) || 0;
    }
    count++;
    fs.writeFileSync(counterFile, count.toString());
    
    console.log(`lids count: ${count}`);
    res.sendStatus(200);
};