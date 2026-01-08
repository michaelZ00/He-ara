const fs = require('fs');
const path = require('path');

// Path to our data file
const dataFile = path.join(__dirname, '../../data.json');

exports.trackVisit = (req, res) => {
    let data = { totalUniqueVisits: 0, visitsLog: [] };

    // 1. Load existing data
    if (fs.existsSync(dataFile)) {
        try {
            const fileContent = fs.readFileSync(dataFile, 'utf8');
            data = JSON.parse(fileContent);
        } catch (err) {
            console.error("Error parsing JSON, resetting data.");
        }
    }

    // 2. Get the User's IP address
    const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // 3. Check if this IP has already been recorded
    const isReturningUser = data.visitsLog.some(entry => entry.ip === userIP);

    if (isReturningUser) {
        console.log(`[Re-visit] IP: ${userIP} - Not incrementing counter.`);
        return res.status(200).json({ status: 'success', message: 'Returning user' });
    }

    // 4. Record New Unique Visit
    const newEntry = {
        ip: userIP,
        timestamp: new Date().toISOString(), // Records date and time in UTC
        userAgent: req.headers['user-agent'] // Optional: tracks device/browser type
    };

    data.visitsLog.push(newEntry);
    data.totalUniqueVisits = data.visitsLog.length;

    // 5. Save back to file
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

    console.log(`[New Lead] IP: ${userIP} recorded at ${newEntry.timestamp}`);
    res.status(200).json({ status: 'success', message: 'Unique visit recorded' });
};