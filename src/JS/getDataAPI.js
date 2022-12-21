const API_URL = 'http://localhost:3001';

export async function GetAllDataTeams () {
    const response = await fetch(`${API_URL}/api/teams`);
    const data = await response.json();
    return data;
}

export async function GetAllDataDrivers () {
    const response = await fetch(`${API_URL}/api/drivers`);
    const data = await response.json();
    return data;
}

export async function GetDriver (driverInfo) {
    const response = await fetch(`${API_URL}/api/drivers/${driverInfo}`);
    const data = await response.json();
    return data;
}