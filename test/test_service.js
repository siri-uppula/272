const axios = require('axios');

async function getHelloWorld() {
    try {
        // Use the tunneled addresses for your services
        const hello = await axios.get('http://127.0.0.1:62356/hello');
        const world = await axios.get('http://127.0.0.1:62426/world');
        console.log(`${hello.data} ${world.data}`);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getHelloWorld();