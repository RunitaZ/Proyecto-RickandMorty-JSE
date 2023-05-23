const characterList = document.getElementById('character-list')
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const characters = data.results;

            
                
            //sacamos los datos para la lista de los personajes
            characters.forEach(character =>{
                if (character.status === 'unknown'){
                const li = document.createElement('li')
                li.classList.add('character')
                const img = document.createElement('img')
                img.src = character.image
                const h2 = document.createElement('h2')
                h2.textContent = character.name
                li.appendChild(img)
                li.appendChild(h2)
                characterList.appendChild(li)
                //Aquí agregamos el estado del personaje
                //const p = document.createElement('p')
                const span= document.createElement('span')
                span.textContent = character.status
                li.appendChild(span)
                
                //aquí agregamos el estado del personaje, en este caso en su imagen
                li.classList.add('character-unknown')
                    
                span.classList.add('icon-Unknown');
                span.textContent = 'Estado: Desconocido'
            
                }
            })
        })
    .catch(error => console.error(error))