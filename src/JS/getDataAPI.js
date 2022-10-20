const API_URL = 'http://localhost:3001';

export async function GetAllDataTest () {
    const response = await fetch(`${API_URL}/api/test`);
    const data = await response.json();
    return data;
}