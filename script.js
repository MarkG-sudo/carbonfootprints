

const url = 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?distance=1000&type=Taxi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '20134425d0msh72452ccaece14edp13103ejsn21d1a8af6e4c',
		
	}
};

async function fetchUrl() {

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.carbonEquivalent)
    
}

fetchUrl()