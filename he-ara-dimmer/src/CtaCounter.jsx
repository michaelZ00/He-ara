const trackVisit = async () => {
    try {
        await fetch('http://localhost:3000/api/track-visit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error('Analytics error');
    }
};

// הפעלה בטעינת הדף
export default trackVisit;