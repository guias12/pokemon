function myFunction(){          
	let rand = Math.floor((Math.random() * (151 - 1) + 1));
    let shinyChance = Math.floor((Math.random() * (500 - 1) + 1));
	let url = `https://pokeapi.co/api/v2/pokemon/${ rand }/`;

    axios.get(url).then(response =>{
		let img = document.createElement("IMG");
    	img.setAttribute("width", "304");
    	img.setAttribute("height", "304");
    	img.setAttribute("class", "image");
    	if(Math.floor((shinyChance/2)) <= 50) {
        	if(response.data.sprites.front_shiny !== null) {
            	img.setAttribute("src", response.data.sprites.front_shiny);					    
				document.body.appendChild(img);
			} else {
				img.setAttribute("src", response.data.sprites.front_default);					
			    document.body.appendChild(img);	
			}
      	} else {
			img.setAttribute("src", response.data.sprites.front_default);
			document.body.appendChild(img);
		}
		let para = document.createElement("P");
      	para.setAttribute("class", "paragraph");
		let t = document.createTextNode(`A wild ${ response.data.name.toUpperCase() } appeared!`);
		para.appendChild(t);
		document.body.appendChild(para);
	}).catch(error => {
		console.log(`Somenthing went wrong`)
	})		
    	
    
  }