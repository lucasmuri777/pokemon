const posts = document.querySelector('#pokemons .center');
        async function loadPosts(){
            let nome = document.getElementById('nomePokemon').value
            nome = nome.toLowerCase()
            nome = nome.trim()
            nome =  nome == "" ? Math.ceil(Math.random() * 898) : nome;
            posts.innerHTML = '<h1 style="color:white;">Carregando...</h1>';

           
            
            fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
            .then(function(resultado){
                return resultado.json();
            }).then(function(json){
                console.log(json);
                montarEstrutura(json);
            })
            .catch(function(){
               posts.innerHTML = '<h1 style="color:white;">Pokemon não encontrado</h1>';
            });
            

        }
            /*
            let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`).catch(function(error){
                console.log('ok')
            });
            let json = await req.json();
            */
           function montarEstrutura(pokemon){
            posts.innerHTML = `
            <div class="pokemon-container">
                <div class="img-container">
                    <img src="${pokemon.sprites.front_default}">
                </div>
                <div class="pokemon-name">
                        <h1>${pokemon.name}</h1>
                </div>
            </div>
        `  ; 
           }