export async function GetAllDataTest () {
    const responseFetch = await fetch('http://localhost:3001/api/test');
    const data = await responseFetch.json();
    return data;
}