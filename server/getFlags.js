import fetch from "node-fetch";

export async function GetFlag(country) {

    const response = await fetch(`https://countryflagsapi.com/png/${country}`);
    console.log(response);
}

GetFlag('argentina');