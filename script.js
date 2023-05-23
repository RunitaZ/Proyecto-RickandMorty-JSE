
const characterList = document.getElementById('character-list')
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const characters = data.results;

            //aquí ordenamos la lista de personajes dependiendo de su estado
            function ordenarAsc(array_json, palabra_key){
                array_json.sort(function(a,b){
                    if(a[palabra_key]> b[palabra_key])
                     return 1;
                    if(a[palabra_key]< b[palabra_key])
                    return -1;
                });
            }
            ordenarAsc(characters,'status');
            console.log(characters);

            //sacamos los datos para la lista de los personajes
            characters.forEach(character =>{
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
                if (character.status === 'Alive'){
                    li.classList.add('character-alive');
                    span.classList.add('icon-alive');
                    span.textContent = 'Estado: Vivo';           
                }
                else if(character.status === 'Dead'){
                    li.classList.add('character-dead')
                    
                    span.classList.add('icon-Dead');
                    span.textContent = 'Estado: Muerto';
                }
                else if(character.status === 'unknown'){
                    li.classList.add('character-unknown')
                    
                    span.classList.add('icon-Unknown');
                    span.textContent = 'Estado: Desconocido'
                }
                //agregamos un botón para ver datos de los personajes
                const a = document.createElement('a')
                a.href = `/`
                li.appendChild(a)
                

            })
        })

        .catch(error => console.error(error))