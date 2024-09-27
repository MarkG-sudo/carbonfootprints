  





document.getElementById('carbon-form').addEventListener('submit', function(event) {
	event.preventDefault(); 
	
	
	const distance = document.getElementById('distance').value;
	const type = document.getElementById('type').value;
	
	const apiUrl = `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?distance=${distance}&type=${type}`;
	
	const options = {
	  method: 'GET',
	  headers: {
		'x-rapidapi-key': '7c5088b712msh926ce6c498afd12p128d06jsn1cb805623d59',
		'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com' // Added the host header
	  }
	};
  

	fetch(apiUrl, options)
	  .then(response => {
		if (!response.ok) {
		  throw new Error(`HTTP error! status: ${response.status}`); 
		}
		return response.json();
	  })
	  .then(data => {
		
		document.getElementById('carbon-output').innerText = `Carbon Equivalent: ${data.carbonEquivalent} kg CO2`;
	  })
	  .catch(error => {
		console.error('Error:', error);
		document.getElementById('carbon-output').innerText = 'An error occurred while fetching the data. Please try again.';
	  });
  });
  
  

