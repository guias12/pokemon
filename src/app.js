function myFunction(){          
	var rand = Math.floor((Math.random() * (151 - 1) + 1));
    var shinyChance = Math.floor((Math.random() * (500 - 1) + 1));
    var link = 'https://pokeapi.co/api/v2/pokemon/' + rand + '/';          
    axios.get(link.toString()).then(function(response){          
    	var x = document.createElement("IMG");
    	x.setAttribute("width", "304");
    	x.setAttribute("height", "304");
    	x.setAttribute("class", "image")
    	if(Math.floor((shinyChance/2)) <= 50){
        	if(response.data.sprites.front_shiny !== null){
            	x.setAttribute("src", response.data.sprites.front_shiny);					    
					document.body.appendChild(x);
			    } else {
					x.setAttribute("src", response.data.sprites.front_default);					
				    document.body.appendChild(x);	
			    }
      	} else {
			x.setAttribute("src", response.data.sprites.front_default);
			document.body.appendChild(x);
		}
		var para = document.createElement("P");
      	para.setAttribute("class", "paragraph");
		var t = document.createTextNode("A wild " + response.data.name.toUpperCase() + ' appeared!');
		para.appendChild(t);
		document.body.appendChild(para);
    }).catch(function (error){
      console.log('deu ruim');
    })
  }