import axios from 'axios';

const api = axios.create({
    baseURL: 'https://asia.ajung.site/api',
    headers: {
        "Content-Type": "application/json",
        "appKey": "yDY5qu106qdgj7iBJm9j1biHH8v7sTO6WPPe29vY",
    }
});

export default api;