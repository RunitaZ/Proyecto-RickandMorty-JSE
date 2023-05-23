
let idHTMLheader = 'header';
let idHTMLfooter = 'footer';
function addHeader(id){
    $(id).load("/h" + idHTMLheader + "-");
}
function addFooter(id){
    $(id).load("/h" + idHTMLfooter + "-");
}
function load_templates(){
    document.getElementById("footer").innerHTML="<object data = 'footer.html'>"
}
load_templates();


/**
 * fetch('https://rickandmortyapi.com/api/character')
                .then((response) => response.json())
                .then((datos) => {
                    const caracter = datos.results
                    caracter.forEach(caract =>{

                

                    })  
                    
                });


                let listElements = document.querySelectorAll('.click')
                listElements.forEach(listElement => {
                    listElements.addEventListener('click', ()=>{
                        listElement.classList.toggle('arrow');
                        let height = 0;
                        let menu = listElement.nextElementSibling;
                        if(menu.clientHeight=="0"){
                            height = menu.scrollHeight;
                        }

                        menu.style.height = `${height}px`;
                    })
                })
 */